import { PersonaControlador} from "../../contoller/persona.controler.js";
import { Router } from "express";
import upload from '../../middleware/uploadPersona.js';


export const PersonaRoutes=({BaseDatos})=>{
    const ruta=Router()
    const controlador=new PersonaControlador({BaseDatos})

    //metodo post que usa multer para guardar las imagenes(en tu formulario debe ser multipñart/form-data, revisa multer)
    ruta.get("/dni/:dni",controlador.BuscarPersona) // /dni/:dni para distinguir otras busquedas, por ejemplo /nombre/:nombre
    ruta.post("/",upload.single('urlfoto_persona'),controlador.CrearPersona)

    return ruta
}