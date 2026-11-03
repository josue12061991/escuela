import { Router } from "express";
import {WebpublicaControlador} from "../contoller/webpublica.controler.js";


export const WebRuta=({BaseDatos})=>{

    const ruta=Router()    
    const controlador=new WebpublicaControlador({BaseDatos})

    // ruta.get("/persona",controlador.MostrarPersonas)
    ruta.get("/slider",controlador.MostrarSliders)
    // ruta.post("/",upload.single('urlfoto_persona'),controlador.CrearPersona)
    return ruta
    
}



