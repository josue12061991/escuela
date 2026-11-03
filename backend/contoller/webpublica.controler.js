import sharp from "sharp"
import { randomUUID } from "crypto"
import { supabase } from "../database/supabase.js"

import {WebModel} from "../modelo/web.js";
import { ValidarRegistroSlider } from "../validator/persona.validator.js";

const BUCKET = "fotos"

export class WebpublicaControlador{
    constructor({BaseDatos}){
        this.miModelo=new WebModel({BaseDatos})
    }


    MostrarPersonas=async(req,res)=>{
        try {
            const rpta=await this.miModelo.MostrarPersonas()
            res.json(rpta)

        } catch (error) {
            res.status(500).json({error:error.message})
        }
    }

    MostrarSliders=async(req,res)=>{
        try {
            const rpta=await this.miModelo.MostrarSlider()
            res.json(rpta)
        } catch (error) {
            res.status(500).json({error:error.message})
        }
    }


    EliminarSlider = async (req, res) => {
    try {
        //Siempre del req.params viene en forma de string y se le convierte a int
        const id = Number(req.params.id)
        if (!Number.isInteger(id) || id < 1) {
            return res.status(400).json({ message: "Id inválido" })
        }

        const eliminado = await this.miModelo.EliminarSlider({id})
        if (!eliminado) {
            return res.status(404).json({ message: "El slider no existe" })
        }

        // Borra la imagen del bucket (si falla, no afecta la respuesta)
        try {
            const ruta = eliminado.url_imagen?.split(`/${BUCKET}/`)[1]
            if (ruta) {
                const { error } = await supabase.storage.from(BUCKET).remove([ruta])
                if (error) console.error("No se pudo borrar la imagen:", error.message)
            }
        } catch (err) {
            console.error("Error al borrar la imagen:", err)
        }

        return res.json({ message: "Slider eliminado" })

    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: "No se pudo eliminar el slider" })
    }
}

    EditarSlider = async (req, res) => {
    const id = Number(req.params.id)
    if (!Number.isInteger(id) || id < 1) {
        return res.status(400).json({ message: "Id inválido" })
    }

    const ResultadoValidarSlider = ValidarRegistroSlider(req.body)
    if (!ResultadoValidarSlider.success) {
        return res.status(400).json({ error: ResultadoValidarSlider.error.issues })
    }

    const {
        titulo_slider, descripcion_slider, textoboton_slider,
        orden_slider, urldestino_slider, estado_slider,
        fechainicio_slider, fechafin_slider
    } = ResultadoValidarSlider.data

    const rutaDesdeUrl = (url) => url?.split(`/${BUCKET}/`)[1]
    let rutaNueva = null
    const limpiarNueva = async () => {
        if (rutaNueva) await supabase.storage.from(BUCKET).remove([rutaNueva])
    }

    try {
        // Slider actual: sirve para el 404 y para conservar o reemplazar su imagen
        const actual = await this.miModelo.ObtenerSliderPorId({ id })
        if (!actual) {
            return res.status(404).json({ message: "El slider no existe" })
        }

        let url_imagen = actual.url_imagen   // por defecto se conserva la actual

        if (req.file) {
            const buffer = await sharp(req.file.buffer)
                .resize({ width: 1920, withoutEnlargement: true })
                .webp({ quality: 80 })
                .toBuffer()

            const ruta = `personas/${randomUUID()}.webp`
            const { error } = await supabase.storage
                .from(BUCKET)
                .upload(ruta, buffer, { contentType: "image/webp" })
            if (error) throw error

            rutaNueva = ruta
            url_imagen = supabase.storage.from(BUCKET).getPublicUrl(ruta).data.publicUrl
        }

        const respuesta = await this.miModelo.ActualizarSlider({
            id, titulo_slider, descripcion_slider, textoboton_slider,
            orden_slider, url_imagen, urldestino_slider, estado_slider,
            fechainicio_slider, fechafin_slider
        })

        if (!respuesta.success) {
            await limpiarNueva()
            return res.status(500).json({ message: "No se pudo actualizar el slider" })
        }

        // La base ya aceptó el cambio: ahora sí se borra la imagen anterior
        if (rutaNueva) {
            const rutaVieja = rutaDesdeUrl(actual.url_imagen)
            if (rutaVieja) {
                const { error } = await supabase.storage.from(BUCKET).remove([rutaVieja])
                if (error) console.error("No se pudo borrar la imagen anterior:", error.message)
            }
        }

        return res.json({ message: "Slider actualizado con éxito" })

    } catch (error) {
        console.error(error)
        await limpiarNueva()

        if (error.code === "23505") {
            return res.status(409).json({ message: "Ya existe un slider con ese titulo" })
        }
        return res.status(500).json({ message: "No se pudo actualizar el slider" })
    }
}



    CrearSlider = async (req, res) => {
        const ResultadoValidarSlider = ValidarRegistroSlider(req.body)
        if (!ResultadoValidarSlider.success) {
             return res.status(400).json({ error: ResultadoValidarSlider.error.issues })
         }

        const {
            titulo_slider, descripcion_slider, textoboton_slider,
           orden_slider, urldestino_slider, estado_slider,
            fechainicio_slider, fechafin_slider
        } = ResultadoValidarSlider.data ?? {}

        let rutaFoto = null
        const limpiarFoto = async (rutaFoto) => {
            if (rutaFoto) await supabase.storage.from(BUCKET).remove([rutaFoto])
        }

        try {
            let url_imagen = null

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
                
                // ruta de la foto como respaldo para poder eliminar si ocurre error antes de registrar en la BD
                rutaFoto = ruta
                url_imagen = supabase.storage.from(BUCKET).getPublicUrl(ruta).data.publicUrl
            }

            const respuesta = await this.miModelo.GuardarSlider({
                titulo_slider, descripcion_slider, textoboton_slider,
                orden_slider,url_imagen, urldestino_slider, estado_slider,
                fechainicio_slider, fechafin_slider
            })

            if (!respuesta.success) {
                await limpiarFoto(rutaFoto)
                return res.status(500).json({ message: "No se pudo crear el slider" })
            }

            return res.status(201).json({
                mensaje: "slider creada con exito",
                id: respuesta.insertId
            })

        } catch (error) {

            await limpiarFoto(rutaFoto)
            if (error.code === "23505") {
                return res.status(409).json({ message: "Ya existe un slider con ese titulo" })
            }
            return res.status(500).json({ message: "No se pudo crear el slider" })
        }
    }



}