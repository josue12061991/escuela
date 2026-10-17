export class PersonaModel{
    constructor({BaseDatos}){
        this.BaseDatos=BaseDatos
    }


    GuardarPersona=async({nombre_persona,apellidopaterno_persona,apellidomaterno_persona,genero_persona,nacimiento_persona,tipodocumento_persona,numerodocumento_persona,celular_persona,direccion_persona,urlfoto_persona,correo_persona})=>{

       
         const {rows}=await this.BaseDatos.query(`Insert into persona
            (nombre_persona,
            apellidopaterno_persona,
            apellidomaterno_persona,
            genero_persona,
            nacimiento_persona,
            tipodocumento_persona,
            numerodocumento_persona,
            celular_persona,
            direccion_persona,
            url_imagen,
            correo_persona) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) returning id_persona`,[nombre_persona,
            apellidopaterno_persona,
            apellidomaterno_persona,
            genero_persona,
            nacimiento_persona,
            tipodocumento_persona,
            numerodocumento_persona,
            celular_persona,
            direccion_persona,
            urlfoto_persona,
            correo_persona])
    return { success: rows.length > 0, insertId: rows[0]?.id_persona }
       
       }
    BuscarPersonaDni=async({dni})=>{
        const {rows}=await this.BaseDatos.query(`select * from persona where numerodocumento_persona=$1`,[dni])
        return rows[0]
    }

    MostrarPersona=async()=>{
        const {rows}=await this.BaseDatos.query("select * from persona")  
              
        return rows
    }

   

}

