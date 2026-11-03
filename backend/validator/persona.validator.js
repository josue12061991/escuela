import {z} from "zod";


/*ESQUEMA VALIDADOR DE PERSONA*/
const EsquemaValidadorPersona=z.object({
    nombre_persona:z.string()
        .trim()
        .min(3,"El nombre debe tener por lo menos 3 caracteres")
        .regex(/^[\p{L}\s]+$/u, "El nombre solo debe tener letras") // en vez de [a-zA-Záé...]
        .transform((v) => 
            v.replace(/\s+/g, " ")
            .toLowerCase()
            .replace(/(^|\s)\p{L}/gu, (l) => l.toUpperCase())),

    apellidopaterno_persona:z.string()
        .trim()
        .min(3,"El apellido paterno debe tener por lo menos 3 caracteres")
        .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,"El apellido paterno no debe tener caracteres especiales")
        .transform((valor) =>valor
            .toLowerCase()
            .replace(/\b\w/g, letra => letra.toUpperCase())),

    apellidomaterno_persona:z.string()
        .trim()
        .min(3,"El apellido materno debe tener por lo menos 3 caracteres")
        .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,"El apellido materno no debe tener caracteres especiales")
        .transform((valor) =>valor
            .toLowerCase()
            .replace(/\b\w/g, letra => letra.toUpperCase())),

    genero_persona:z.enum(["masculino", "femenino"]),

    nacimiento_persona: z.iso.date("La fecha debe tener el formato AAAA-MM-DD y ser una fecha real")
                            .refine((v) => v <= new Date().toISOString().slice(0, 10), "La fecha no puede ser futura"),

    tipodocumento_persona:z.enum(["DNI","CE"]),

    numerodocumento_persona:z.string()
        .trim()
        .regex(/^\d{8}$/,"El DNI debe tener 8 cifras numericas"),

    celular_persona:z.string()
        .trim()
        .regex(/^9\d{8}$/,"El celular debe empezar con 9 y tener 9 digitos"),

    direccion_persona:z.string()
        .trim()
        .min(3,"La direccion debe tener por lo menos 3 caracteres")
        .max(150, "La dirección no puede superar los 150 caracteres"),

    // urlfoto_persona:z.string().url("URL inválida").optional(),

    correo_persona:z.string()
        .trim()
        .email("Email invalido")
        .toLowerCase()
        .max(100, "El correo no puede superar los 100 caracteres"),
})


/* ESQUEMA VALIDADOR DE USUARIO */
const EsquemaValidadorUsuario=z.object({

    name_usuario:z.string()
        .trim()
        .toLowerCase()
        .min(6,"El name debe tener por lo menos 6 caracteres")
        .max(20,"El name debe tener maximo 20 caracteres")        
        .regex(/^[a-z0-9._-]+$/,"Solo letras, numeros y -._"),
 
    passwordhasheado_usuario:z.string()
        .min(6,"El password debe tener por lo menos 6 caracteres")
        .max(50,"El password debe tener maximo 20 caracteres") 
        .regex(/[a-z]/,"El password debe tener una letra minuscula")
        .regex(/[A-Z]/,"El password debe tener una letra mayuscula")
        .regex(/[0-9]/,"El password debe tener un numero")
        .regex(/[^a-zA-Z0-9]/,"El password debe tener un caracter especial")
})



/*ESQUEMA VALIDADOR DE SLIDER*/
const EsquemaValidadorSlider=z.object({
    titulo_slider:z.string()
        .trim()
        .min(5,"El titulo debe tener por lo menos 5 caracteres")
        .regex(/^[\p{L}\s]+$/u, "El titulo solo debe tener letras") // en vez de [a-zA-Záé...]
        .transform((v) => 
            v.replace(/\s+/g, " ")
            .toLowerCase()
            .replace(/^\p{L}/u, (l) => l.toUpperCase())),

    descripcion_slider:z.string()
        .trim()
        .min(10,"La descripcion debe tener por lo menos 10 caracteres")
        .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,"La descripcion no debe tener caracteres especiales")
        .transform((valor) =>valor
            .toLowerCase()
            .replace(/^\p{L}/u, (l) => l.toUpperCase())),

    textoboton_slider:z.string()
        .trim()
        .min(5,"El texto del boton debe tener por lo menos 5 caracteres")
        .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,"El texto del boton no debe tener caracteres especiales")
        .transform((valor) =>valor
            .toLowerCase()
            .replace(/^\p{L}/u, (l) => l.toUpperCase())),

    orden_slider: z.coerce.number("El orden debe ser un número")
    .int("El orden debe ser un número entero")
    .min(1, "El orden debe ser 1 o mayor"),


    urldestino_slider: z.string()
    .trim()
    .max(255, "El enlace no debe superar 255 caracteres")
    .refine(
        (v) => v === "" || /^(\/(?!\/)\S*|#\S+|https?:\/\/\S+)$/.test(v),
        "Usa una ruta (/matriculas), un ancla (#nosotros) o una URL (https://...)"
    )
    .transform((v) => (v === "" ? null : v)),

    estado_slider: z.enum(["ACTIVO", "INACTIVO"], "El estado debe ser ACTIVO o INACTIVO")
    .default("ACTIVO"),

    fechainicio_slider: z.preprocess(
    (v) => (v === "" || v == null ? null : v),
    z.iso.date("La fecha debe tener el formato AAAA-MM-DD y ser una fecha real").nullable()),

    fechafin_slider: z.preprocess(
    (v) => (v === "" || v == null ? null : v),
    z.iso.date("La fecha final debe tener el formato AAAA-MM-DD y ser una fecha real").nullable()),
    
})


export const ValidarRegistroPersona=(persona)=>{
    return EsquemaValidadorPersona.safeParse(persona)
}

export const ValidarRegistroUsuario=(usuario)=>{
    return EsquemaValidadorUsuario.safeParse(usuario)
}

export const ValidarRegistroSlider=(slider)=>{
    return EsquemaValidadorSlider.safeParse(slider)
}