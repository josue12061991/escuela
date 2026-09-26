import {IniciarServidor} from "./app.js";
import {pool} from "./database/postgresql.js";
import "dotenv/config"

const app=IniciarServidor({BaseDatos:pool})
const PORT=process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log(`Backende Corriendo en http://localhost:${PORT}`);
    
})