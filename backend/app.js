import cors from "cors"
import express from "express"

import {WebRuta} from "./router/webRouters.js";
import {DashboardRoutes} from "./router/dashboard/DashboardRouters.js";

export const  IniciarServidor=({BaseDatos})=>{
const app=express()
app.use(cors())
app.use(express.json())

//Importando rutas de la pagina web
app.use("/",WebRuta({BaseDatos}))

//Importando rutas del dashboard
app.use("/dashboard",DashboardRoutes({BaseDatos}))



return app

}



