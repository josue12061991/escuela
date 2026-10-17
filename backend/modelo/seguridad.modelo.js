//Para hashear las contraseñas
import bcrypto from "bcrypt"


export class SeguridadModel{
    constructor({BaseDatos}){
        this.BaseDatos=BaseDatos
    }


    GuardarUsuario=async({id_persona,name_usuario,passwordhasheado_usuario})=>{
        const passwordEncriptado=await bcrypto.hash(passwordhasheado_usuario,10)
        const {rows}=await this.BaseDatos.query(`insert into usuario (id_persona,name_usuario,passwordhasheado_usuario) values ($1,$2,$3) returning id_usuario`
            ,[id_persona,name_usuario,passwordEncriptado])

        return { success: rows.length > 0, insertId: rows[0]?.id_usuario }
    }
    


}

