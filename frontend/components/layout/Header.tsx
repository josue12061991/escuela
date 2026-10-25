"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import Thema from "@/components/layout/Thema"
import Menubar from "@/components/layout/MenuBar"
import { House, Info, FolderKanban, ShelvingUnit, Blocks, Contact } from "lucide-react"

const links = [
  { href: "#inicio", label: "Inicio", icono: <House className="text-iconos" /> },
  { href: "#nosotros", label: "Nosotros", icono: <Info className="text-iconos" /> },
  { href: "#matriculas", label: "Matriculas", icono: <ShelvingUnit className="text-iconos" /> },
  { href: "#docentes", label: "Docentes", icono: <FolderKanban className="text-iconos" /> },
  { href: "#blogs", label: "Blogs", icono: <Blocks className="text-iconos" /> },
  { href: "#contactano", label: "Contactanos", icono: <Contact className="text-iconos" /> },
]

export default function Header() {
  const [activo, setActivo] = useState("#inicio")

  useEffect(() => {
    // const secciones = links
    //   .map((l) => document.querySelector(l.href))
    //   .filter((el): el is Element => el !== null)
    const secciones:Element[]=[]

    for(const link of links){
        const section=document.querySelector(link.href)
        if(section){
            secciones.push(section)
        }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActivo(`#${entry.target.id}`)
        })
      },
      { rootMargin: "-40% 0px -55% 0px" }
    )

    secciones.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="px-8 py-2 bg-white/5 backdrop-blur-md border-white/20 shadow-lg flex items-center justify-between fixed top-0 z-50 w-full h-16">
      <Menubar lista={links} />
      <span className="hidden font-(family-name:--font-chela-one) font-extralight text-2xl text-logo md:flex">
        {"{"}&lt;Josue Dev&gt;{"}"}
      </span>
      <ul className="gap-12 hidden md:flex">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={activo === link.href ? "text-linkactivado" : "text-opciones"}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <Thema />
    </nav>
  )
}