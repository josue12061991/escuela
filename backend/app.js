import cors from "cors"
import express from "express"

import {WebRuta} from "./router/web.js";

export const  IniciarServidor=({BaseDatos})=>{
const app=express()
app.use(cors())
app.use(express.json())

//Importando rutas de la pagina web
app.use("/",WebRuta({BaseDatos}))



return app

}



