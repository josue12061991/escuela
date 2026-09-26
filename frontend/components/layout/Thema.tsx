'use client'
import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"

export default function Thema() {
    const [IsDark, setIsDark] = useState(false);

    useEffect(() => {
        setIsDark(document.documentElement.classList.contains("dark"));
    }, []);

    const TemaActual = () => {
        document.documentElement.classList.toggle('dark')
        const NuevoTema = document.documentElement.classList.contains("dark");
        setIsDark(NuevoTema)
        localStorage.setItem("theme", NuevoTema ? "dark" : "light")
    }

    return (
        <button
            onClick={TemaActual}
            aria-label="Boton para cambiar de thema"
            className="relative flex h-8 w-16 items-center rounded-full bg-gray-400 dark:bg-blue-950 px-1  cursor-pointer"
        >
            {/* Iconos fijos de fondo */}
            <Sun className={`absolute left-1.5 size-5 text-black transition-opacity duration-300 ${IsDark ? "z-0 opacity-0" : "z-15 opacity-100"} `} />


            <Moon className={`absolute right-1.5 size-5 text-blue-800 transition-opacity duration-300 ${IsDark ? "z-15 opacity-100" : "z-0 opacity-0"} `} />

            {/* Circulo deslizante */}
            <span
                className={`z-10 size-6 flex  items-center justify-center rounded-full bg-white transition-transform duration-300 ${
                    IsDark ? "translate-x-8" : "translate-x-0"
                }`}
            >
                
            </span>
        </button>
    )
}