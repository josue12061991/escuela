export class WebModel{
    constructor({BaseDatos}){
        this.BaseDatos=BaseDatos
    }

    MostrarPersonas=async()=>{
        const {rows}=await this.BaseDatos.query("select * from persona")        
        return rows
    }

    MostrarSlider=async(req,res)=>{
        const {rows}=await this.BaseDatos.query("select * from slider")
        return rows
    }

}