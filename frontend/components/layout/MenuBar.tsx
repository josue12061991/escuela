'use client'

import {Menu,ChevronLeft,ChevronRight  } from "lucide-react"
import {useState} from "react"
import Link from "next/link"
import type { ReactNode } from "react";

type link={
    href:string,
    label:string,
    icono:ReactNode
}

type LinksProps={
    lista:link[]
}



export default  function MenuBar({lista}:LinksProps){
    const [IsOpen,setIsOpen]=useState(false)

    
    return (
        <>
        <button onClick={()=>setIsOpen(!IsOpen)} aria-label="Abrir el menu" className="flex md:hidden">
            {/* {
                    IsOpen ? <X/> : <Menu/>
            } */}
            <Menu className="flex md:hidden"/>
        </button>
            
        
        <div className={`flex flex-col items-center absolute  w-full h-dvh bg-navescondido text-fondo left-0 top-0 
                    transition-transform duration-300 ease-in  
                    ${IsOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <div className="relative flex p-2 bg-white/5  w-full justify-center backdrop-blur-md shadow-lg">
                <button onClick={()=>setIsOpen(!IsOpen)} aria-label="Cerrar el menu" className="absolute top-1/2 -translate-y-1/2 left-8">
                    <ChevronLeft className="text-iconos"/>
                </button>
                <h1>Opciones</h1>
            </div>
            <div className="flex flex-col justify-between  w-full h-full">
                <ul className="flex flex-col items-center w-full px-8">
                            {
                                lista.map(link=>
                                    <li key={link.href} className="p-2 w-full ">
                                        <Link href={link.href} className="flex items-center backdrop-blur-md bg-white/20 shadow-lg  gap-4 border border-gray-200 rounded-[10px] p-2">
                                            {link.icono}
                                            <span className="inline-block flex-1 font-semibold">{link.label}</span>
                                            <ChevronRight size={15} className="text-iconos"/>
                                        </Link>
                                    </li>
                                )
                            }
                </ul>
                <span className="inline-block text-center ">Version 1.0</span>
            </div>
        </div>     
            

        
        </>
    )

}