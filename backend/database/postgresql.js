import pg from "pg"
import "dotenv/config"

const {Pool}=pg

export const pool=new Pool({
    connectionString:process.env.DATABASE_URL,
    ssl:{
        rejectUnauthorized:false
    },//Esto debes cambiar para cifrarlo a la hora de ponerlo en produccion, ya que solo estamos en desarrollo
})