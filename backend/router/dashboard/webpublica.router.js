import { WebpublicaControlador} from "../../contoller/webpublica.controler.js";
import { Router } from "express";
import upload from '../../middleware/uploadPersona.js';
import { subirImagenSlider } from '../../middleware/uploadPersona.js'


export const WebpublicaRoutes=({BaseDatos})=>{
    const ruta=Router()
    const controlador=new WebpublicaControlador({BaseDatos})

    //metodo post que usa multer para guardar las imagenes(en tu formulario debe ser multipñart/form-data, revisa multer)
    // ruta.get("/dni/:dni",controlador.BuscarPersona) // /dni/:dni para distinguir otras busquedas, por ejemplo /nombre/:nombre
    // ruta.post("/",upload.single('urlfoto_persona'),controlador.CrearPersona)



    //metodo para mostrar todos los sliders)
    ruta.get("/sliders",controlador.MostrarSliders) 
    //tener cuidado con esta manera de subir los archivos o fotos, ya que ese uload.single no muestra el mensaje de error que lanza multer, por ejemplo si la imagen pesa mas de 2mb, no se podra leer el mensaje que lanza multer, para eso se creo un middleware subirImagenSlider
    ruta.post("/sliders",upload.single('url_imagen'),controlador.CrearSlider)
    ruta.put("/sliders/:id",subirImagenSlider,controlador.EditarSlider) 
    ruta.delete("/sliders/:id",controlador.EliminarSlider) 
    

    return ruta
}