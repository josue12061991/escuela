import { SeguridadControlador} from "../../contoller/seguridad.controler.js";
import { Router } from "express";


export const SeguridadRoutes=({BaseDatos})=>{
    const ruta=Router()
    const controlador=new SeguridadControlador({BaseDatos})

    //metodo post que usa multer para guardar las imagenes(en tu formulario debe ser multipñart/form-data, revisa multer)
    
    ruta.post("/crearUsuario",controlador.CrearUsuario)

    return ruta
}