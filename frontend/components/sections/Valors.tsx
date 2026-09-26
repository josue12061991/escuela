import {GraduationCap,Sparkles ,DiamondPlus ,Proportions  } from "lucide-react"

export default function Valors(){
    return (
    <div className="hidden md:flex justify-between gap-8">
        
        <div className="bg-white/10 hover:bg-gray-200 dark:hover:bg-white/15 backdrop-blur-md   border border-gray-300 dark:border-white/10 border-b-green-500 dark:border-b-green-500 border-b-4 dark:border-b-4 shadow-lg rounded-[10px] p-4 flex flex-col gap-2">
            <div className="text-sm flex items-center gap-2 text-green-500">
                <GraduationCap className=""/><p>Educacion integral</p>
            </div>
            <p className="text-xs text-letras font-light">Breve descripcion del valor aqui que defina el valor para mayor informacion</p>
        </div>

        <div className="bg-white/10 hover:bg-gray-200 dark:hover:bg-white/15  backdrop-blur-md border border-gray-300 dark:border-white/10 shadow-lg rounded-[10px] p-4 flex flex-col gap-2 border-b-blue-500 dark:border-b-blue-500 border-b-4 dark:border-b-4">
            <div className="text-sm flex items-center gap-2 text-blue-500">
                <Sparkles className="" /><p>Valores</p>
            </div>
            <p className="text-xs text-letras font-light">Breve descripcion del valor aqui que defina el valor para mayor informacion</p>
        </div>

        <div className="bg-white/10 hover:bg-gray-200 dark:hover:bg-white/15  backdrop-blur-md border border-gray-300 dark:border-white/10 shadow-lg  rounded-[10px] p-4 flex flex-col gap-2 border-b-orange-500 dark:border-b-orange-500 border-b-4 dark:border-b-4">
            <div className="text-sm flex items-center gap-2 text-orange-400">
                <DiamondPlus  className="" /><p>Etica</p>
            </div>
            <p className="text-xs text-letras font-light">Breve descripcion del valor aqui que defina el valor para mayor informacion</p>
        </div>

        <div className="bg-white/10 hover:bg-gray-200 dark:hover:bg-white/15   backdrop-blur-md border border-gray-300 dark:border-white/10 shadow-lg  rounded-[10px] p-4 flex flex-col gap-2 border-b-red-500 dark:border-b-red-500 border-b-4 dark:border-b-4">
            <div className="text-sm flex items-center gap-2 text-red-500">
                <Proportions  className="" /><p>Responsabilidad</p>
            </div>
            <p className="text-xs text-letras font-light">Breve descripcion del valor aqui que defina el valor para mayor informacion</p>
        </div>

    </div>
    )
}