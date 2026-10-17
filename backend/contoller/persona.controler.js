import sharp from "sharp"
import { randomUUID } from "crypto"
import { PersonaModel } from "../modelo/persona.modelo.js"
import { supabase } from "../database/supabase.js"
import {ValidarRegistroPersona} from "../validator/persona.validator.js"

const BUCKET = "fotos"

export class PersonaControlador {
    constructor({ BaseDatos }) {
        this.persona = new PersonaModel({ BaseDatos })
    }

    CrearPersona = async (req, res) => {
        const ResultadoValidarPersona = ValidarRegistroPersona(req.body)
        if (!ResultadoValidarPersona.success) {
             return res.status(400).json({ error: ResultadoValidarPersona.error.issues })
         }

        const {
            nombre_persona, apellidopaterno_persona, apellidomaterno_persona,
            genero_persona, nacimiento_persona, tipodocumento_persona,
            numerodocumento_persona, celular_persona, direccion_persona,
            correo_persona
        } = ResultadoValidarPersona.data ?? {}

        let rutaFoto = null
        const limpiarFoto = async () => {
            if (rutaFoto) await supabase.storage.from(BUCKET).remove([rutaFoto])
        }

        try {
            let urlfoto_persona = null

            if (req.file) {
                const buffer = await sharp(req.file.buffer)
                    .resize(400, 400, { fit: "cover" })
                    .webp({ quality: 80 })
                    .toBuffer()

                const ruta = `personas/${randomUUID()}.webp`
                const { error } = await supabase.storage
                    .from(BUCKET)
                    .upload(ruta, buffer, { contentType: "image/webp" })
                if (error) throw error

                rutaFoto = ruta
                urlfoto_persona = supabase.storage.from(BUCKET).getPublicUrl(ruta).data.publicUrl
            }

            const respuesta = await this.persona.GuardarPersona({
                nombre_persona, apellidopaterno_persona, apellidomaterno_persona,
                genero_persona, nacimiento_persona, tipodocumento_persona,
                numerodocumento_persona, celular_persona, direccion_persona,
                urlfoto_persona, correo_persona
            })

            if (!respuesta.success) {
                await limpiarFoto()
                return res.status(500).json({ message: "No se pudo crear la persona" })
            }

            return res.status(201).json({
                mensaje: "persona creada con exito",
                id: respuesta.insertId
            })

        } catch (error) {
            console.error(error)
            await limpiarFoto()

            if (error.code === "23505") {
                return res.status(409).json({ message: "Ya existe una persona con ese documento o correo" })
            }
            return res.status(500).json({ message: "No se pudo crear la persona" })
        }
    }

    BuscarPersona = async (req, res) => {
       const {dni}=req.params
       try {
        const respuesta=await this.persona.BuscarPersonaDni({dni})
        return res.status(200).json(respuesta)
       } catch (error) {
        console.error(error)
        res.status(500).json({message:"No se pudo completar la busqueda de la persona"})
        
       }
    }
}