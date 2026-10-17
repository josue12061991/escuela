import {Router} from "express";

import { PersonaRoutes} from "./persona.router.js";
import { SeguridadRoutes} from "./seguridad.router.js";

export const DashboardRoutes=({BaseDatos})=>{
    const ruta=Router()
    ruta.use("/persona",PersonaRoutes({BaseDatos}))
    ruta.use("/seguridad",SeguridadRoutes({BaseDatos}))

    return ruta
}