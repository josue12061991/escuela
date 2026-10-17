import { randomUUID } from "crypto"
import { SeguridadModel } from "../modelo/seguridad.modelo.js"
import {ValidarRegistroPersona} from "../validator/persona.validator.js"
import {ValidarRegistroUsuario} from "../validator/persona.validator.js"

import { PersonaModel } from "../modelo/persona.modelo.js"

export class SeguridadControlador {
    constructor({ BaseDatos }) {
        this.usuario = new SeguridadModel({ BaseDatos })
        this.persona= new PersonaModel({BaseDatos})
    }

    CrearUsuario = async (req, res) => {
        const dni="66655545"

        const resp=await this.persona.BuscarPersonaDni({dni})
        const {id_persona}=resp

        const ResultadoValidarUsuario = ValidarRegistroUsuario(req.body)
        if (!ResultadoValidarUsuario.success) {
             return res.status(400).json({ error: ResultadoValidarUsuario.error.issues })
         }


        const {
            name_usuario,passwordhasheado_usuario // EL ID_PERSONA DEBES HACER CON UNA BUSQUEDA PREVIA CON DNI O NOMBRE QUE TE DEVUELVA EL ID_PERSONA DE LA PERSONA QUE QUIERES ASOCIAR AL USUARIO, Y LUEGO LO PASAS AQUI
        } = ResultadoValidarUsuario.data ?? {}

        
        try {
            const respuesta = await this.usuario.GuardarUsuario({
                id_persona,name_usuario,passwordhasheado_usuario
            })

            return res.status(201).json({
                mensaje: "Usuario creada con exito",
                id: respuesta.insertId
            })


        } catch (error) {
            console.error(error)

            if (error.code === "23505") {
                return res.status(409).json({ message: "Ya existe un usuario con ese username" })
            }
            return res.status(500).json({ message: "No se pudo crear el usuario" })
        }
    }
}