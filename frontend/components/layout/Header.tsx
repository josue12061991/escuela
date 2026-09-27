import  Link  from "next/link";
import Thema from "@/components/layout/Thema";
import Menubar from "@/components/layout/MenuBar"
import {House,Info ,FolderKanban,ShelvingUnit,Blocks,Contact      } from "lucide-react"

/*La lista de opciones en el navegador*/
const links=[
        {href:"#inicio",label:"Inicio",icono:<House className="text-iconos"/>},
        {href:"#nosotros",label:"Nosotros",icono:<Info  className="text-iconos"/>},
        {href:"#matriculas",label:"Matriculas",icono:<ShelvingUnit  className="text-iconos"/>},
        {href:"#docentes",label:"Docentes",icono:<FolderKanban  className="text-iconos"/> },
        {href:"#blogs",label:"Blogs",icono:<Blocks  className="text-iconos"/>},
        {href:"#contactano",label:"Contactanos",icono:<Contact  className="text-iconos"/>},
]

export default function Header(){
    return (
       

        <nav className=" px-8 py-2 bg-white/5 backdrop-blur-md  border-white/20 shadow-lg  flex items-center justify-between fixed top-0 z-50 w-full h-16" >
            <Menubar  lista={links}/>
            <span className="hidden font-(family-name:--font-chela-one) font-extralight   text-2xl text-logo md:flex">{'{'}&lt;Josue Dev&gt;{'}'}</span>
            <ul className=" gap-12 text-opciones hidden md:flex">
                {
                    links.map(link=>{
                        // const LinkActivo=pathname===link.href
                        
                        return(
                            <li  key={link.href} >
                                <Link href={link.href} className="text-opciones "
                                    // className:list={`hola   ${LinkActivo ? "text-linkactivo" : "" } ` }
                                >
                                    {link.label}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
    
    <Thema/>
</nav>


    )
}