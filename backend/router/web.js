import { Router } from "express";
import {WebController} from "../contoller/web.js";


export const WebRuta=({BaseDatos})=>{

    const ruta=Router()    
    const controlador=new WebController({BaseDatos})

    ruta.get("/persona",controlador.MostrarPersonas)
    ruta.get("/slider",controlador.MostrarSlider)

    return ruta
    
}



