export class WebModel{
    constructor({BaseDatos}){
        this.BaseDatos=BaseDatos
    }

    MostrarPersonas=async()=>{
        const {rows}=await this.BaseDatos.query("select * from persona")        
        return rows
    }

    MostrarSlider=async(req,res)=>{
        const {rows}=await this.BaseDatos.query(`
        select id_slider, titulo_slider, descripcion_slider, textoboton_slider,
               urldestino_slider, url_imagen, orden_slider, estado_slider,
               to_char(fechainicio_slider, 'YYYY-MM-DD') as fechainicio_slider,
               to_char(fechafin_slider, 'YYYY-MM-DD') as fechafin_slider
        from slider
        order by orden_slider
    `)
        return rows
    }

    EliminarSlider=async({id})=>{
        const {rows}=await this.BaseDatos.query(
            "delete from slider where id_slider=$1 returning url_imagen",[id])
            return rows[0] ?? null
    }


    ObtenerSliderPorId=async({id})=>{
        const {rows}=await this.BaseDatos.query(
            "select url_imagen from slider where id_slider=$1",[id])
            return rows[0] ?? null
    }

    GuardarSlider=async({titulo_slider, descripcion_slider, textoboton_slider,
                orden_slider,url_imagen, urldestino_slider, estado_slider,
                fechainicio_slider, fechafin_slider})=>{

       
         const {rows}=await this.BaseDatos.query(`Insert into slider
            (titulo_slider, descripcion_slider, textoboton_slider,
            orden_slider,url_imagen, urldestino_slider, estado_slider,
            fechainicio_slider, fechafin_slider) values ($1,$2,$3,$4,$5,$6,$7,$8,$9) returning id_slider`,[titulo_slider, descripcion_slider, textoboton_slider,
            orden_slider,url_imagen, urldestino_slider, estado_slider,
            fechainicio_slider, fechafin_slider])
    return { success: rows.length > 0, insertId: rows[0]?.id_slider }
       
       }
    ActualizarSlider=async({id,titulo_slider, descripcion_slider, textoboton_slider,
                orden_slider,url_imagen, urldestino_slider, estado_slider,
                fechainicio_slider, fechafin_slider})=>{

       
         const {rows}=await this.BaseDatos.query(
            `update slider set
            titulo_slider = $1,
            descripcion_slider = $2,
            textoboton_slider = $3,
            orden_slider = $4,
            url_imagen = $5,
            urldestino_slider = $6,
            estado_slider = $7,
            fechainicio_slider = $8,
            fechafin_slider = $9
         where id_slider = $10
         returning id_slider
        `,[titulo_slider, descripcion_slider, textoboton_slider,
         orden_slider, url_imagen, urldestino_slider, estado_slider,
         fechainicio_slider, fechafin_slider, id])
    return { success: rows.length  }
       
       }



}