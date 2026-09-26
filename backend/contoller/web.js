import {WebModel} from "../modelo/web.js";

export class WebController{
    constructor({BaseDatos}){
        this.miModelo=new WebModel({BaseDatos})
    }


    MostrarPersonas=async(req,res)=>{
        try {
            const rpta=await this.miModelo.MostrarPersonas()
            res.json(rpta)

        } catch (error) {
            res.status(500).json({error:error.message})
        }
    }

    MostrarSlider=async(req,res)=>{
        try {
            const rpta=await this.miModelo.MostrarSlider()
            res.json(rpta)
        } catch (error) {
            res.status(500).json({error:error.message})
        }
    }



}