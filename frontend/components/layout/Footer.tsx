import Image from "next/image"
import Link from "next/link"
import { GraduationCap, ShieldCheck, Settings, FileText, ChevronRight, Copyright } from "lucide-react"

const Footer=()=>{
    return (
        <footer className="bg-[#0d1b3e] text-white p-8">
            <div className="flex flex-col gap-10">

                <div className="flex gap-8 flex-wrap ">
                    <div className="flex-1 min-w-[260px]">
                        <div className="flex items-center gap-3 mb-3">
                            <Image src="/logoFooterAmbar.webp" alt="logo del colegio" width={48}
                                    height={48}/>
                            <h4 className="font-bold text-lg leading-tight">I.E. Nuestra Señora <br/> de la Paz</h4>
                        </div>
                        <span className="block w-10 h-1 bg-orange-400 rounded-full mb-3"></span>
                        <span className="text-sm text-slate-300 font-light">Somos una institución educativa comprometida con la excelencia académica y la formación integral. Brindamos educación de calidad con alta exigencia, respaldada por el desempeño de nuestros alumnos. Durante 17 años hemos formado niños genios, responsables y preparados para el futuro.</span>
                    </div>

                    <div className="flex gap-8 flex-wrap">
                            <div className="flex flex-col gap-3 min-w-[160px]">
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-950">
                                        <GraduationCap className="w-5 h-5 text-orange-400"/>
                                    </span>
                                    <h5 className="font-semibold">Acerca de la empresa</h5>
                                </div>
                                <div className="flex flex-col gap-2 pl-1">
                                    <Link href="/quienes-somos" className="flex items-center gap-1 text-sm text-slate-300 hover:text-orange-400 font-light">
                                        <ChevronRight className="w-4 h-4 text-orange-400 shrink-0"/>¿Quiénes somos?
                                    </Link>
                                    <Link href="/equipo" className="flex items-center gap-1 text-sm text-slate-300 hover:text-orange-400 font-light">
                                        <ChevronRight className="w-4 h-4 text-orange-400 shrink-0"/>Nuestro equipo
                                    </Link>
                                    <Link href="/trabaja-con-nosotros" className="flex items-center gap-1 text-sm text-slate-300 hover:text-orange-400 font-light">
                                        <ChevronRight className="w-4 h-4 text-orange-400 shrink-0"/>Trabaja con nosotros
                                    </Link>
                                    <Link href="/mision" className="flex items-center gap-1 text-sm text-slate-300 hover:text-orange-400 font-light">
                                        <ChevronRight className="w-4 h-4 text-orange-400 shrink-0"/>Misión
                                    </Link>
                                    <Link href="/cultura" className="flex items-center gap-1 text-sm text-slate-300 hover:text-orange-400 font-light">
                                        <ChevronRight className="w-4 h-4 text-orange-400 shrink-0"/>Nuestra cultura
                                    </Link>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 min-w-[160px]">
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-950">
                                        <ShieldCheck className="w-5 h-5 text-orange-400"/>
                                    </span>
                                    <h5 className="font-semibold">Conecta con smart kids</h5>
                                </div>
                                <div className="flex flex-col gap-2 pl-1">
                                    <Link href="/atencion-apoderado" className="flex items-center gap-1 text-sm text-slate-300 hover:text-orange-400 font-light">
                                        <ChevronRight className="w-4 h-4 text-orange-400 shrink-0"/>Atención al apoderado
                                    </Link>
                                    <Link href="/politica-privacidad" className="flex items-center gap-1 text-sm text-slate-300 hover:text-orange-400 font-light">
                                        <ChevronRight className="w-4 h-4 text-orange-400 shrink-0"/>Política de privacidad
                                    </Link>
                                    <Link href="/terminos-condiciones" className="flex items-center gap-1 text-sm text-slate-300 hover:text-orange-400 font-light">
                                        <ChevronRight className="w-4 h-4 text-orange-400 shrink-0"/>Términos y condiciones
                                    </Link>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 min-w-[160px]">
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-950">
                                        <Settings className="w-5 h-5 text-orange-400"/>
                                    </span>
                                    <h5 className="font-semibold">Nuestros servicios</h5>
                                </div>
                                <div className="flex flex-col gap-2 pl-1">
                                    <Link href="/año-lectivo" className="flex items-center gap-1 text-sm text-slate-300 hover:text-orange-400 font-light">
                                        <ChevronRight className="w-4 h-4 text-orange-400 shrink-0"/>Año lectivo
                                    </Link>
                                    <Link href="/academia" className="flex items-center gap-1 text-sm text-slate-300 hover:text-orange-400 font-light">
                                        <ChevronRight className="w-4 h-4 text-orange-400 shrink-0"/>Academia
                                    </Link>
                                    <Link href="/reforzamiento" className="flex items-center gap-1 text-sm text-slate-300 hover:text-orange-400 font-light">
                                        <ChevronRight className="w-4 h-4 text-orange-400 shrink-0"/>Reforzamiento
                                    </Link>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 min-w-[160px]">
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-950">
                                        <FileText className="w-5 h-5 text-orange-400"/>
                                    </span>
                                    <h5 className="font-semibold">Recursos gratis</h5>
                                </div>
                                <div className="flex flex-col gap-2 pl-1">
                                    <Link href="/fichas-gratis" className="flex items-center gap-1 text-sm text-slate-300 hover:text-orange-400 font-light">
                                        <ChevronRight className="w-4 h-4 text-orange-400 shrink-0"/>Fichas gratis
                                    </Link>
                                </div>
                            </div>
                    </div>
                </div>

                <div className="border-t border-slate-700"></div>

                <div className="flex justify-between flex-wrap gap-4 items-center ">
                    <p className="flex items-center gap-2 text-sm text-slate-300">
                        <Copyright className="w-4 h-4"/>Copyright - 2026: Dev Josue salvatierra cordero.
                    </p>
                    <div className="flex gap-3">
                        <a className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-600 transition-transform hover:scale-110" href="https://www.youtube.com/tu-canal" target="_blank" rel="noopener noreferrer" aria-label="youtube" title="Ir a YouTube">
                            <Image src="/youtube.svg" alt="Icono de YouTube" width={20} height={20} className="size-5"/>
                        </a>
                        <a className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-600 transition-transform hover:scale-110" href="https://facebook.com/tu-pagina" target="_blank" rel="noopener noreferrer" aria-label="facebook" title="Ir a Facebook">
                            <Image src="/facebook.svg" alt="Icono de Facebook" width={20} height={20} className="size-5"/>
                        </a>
                        <a className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-600 transition-transform hover:scale-110" href="https://wa.me/tu-numero" target="_blank" rel="noopener noreferrer" aria-label="whatsapp" title="Ir a WhatsApp">
                            <Image src="/whatsapp.svg" alt="Icono de WhatsApp" width={20} height={20} className="size-5"/>
                        </a>
                        <a className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-gray-500 via-gray-500 to-gray-500 transition-transform hover:scale-110" href="https://instagram.com/tu-cuenta" target="_blank" rel="noopener noreferrer" aria-label="instagram" title="Ir a Instagram">
                            <Image src="/instagram.svg" alt="Icono de Instagram" width={20} height={20} className="size-5"/>
                        </a>
                        <a className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-500 transition-transform hover:scale-110" href="https://x.com/tu-cuenta" target="_blank" rel="noopener noreferrer" aria-label="x" title="Ir a X">
                            <Image src="/x.svg" alt="Icono de X" width={20} height={20} className="size-5"/>
                        </a>
                        <a className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-600 transition-transform hover:scale-110" href="https://linkedin.com/company/tu-empresa" target="_blank" rel="noopener noreferrer" aria-label="linkedin" title="Ir a LinkedIn">
                            <Image src="/linkedin.svg" alt="Icono de LinkedIn" width={20} height={20} className="size-5"/>
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer