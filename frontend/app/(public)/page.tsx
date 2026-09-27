export const metadata={
  title:"Home"
}

import HeroSlider from "@/components/sections/HeroSlider";
import Valors from "@/components/sections/Valors";
import About from "@/components/sections/About"
import type {Slider} from "@/types/slider"



export  default async function Home() {
  const datos=await fetch(`${process.env.API_URL}/slider`, {
  cache: "no-store",
})
if(!datos.ok){
   throw new Error("No existe los datos del slider")
}
  
    const heros: Slider[]=await datos.json()
  

  return (
    <>
      <section id="inicio" className="h-[90dvh]  flex flex-col p-8 mt-16 scroll-mt-16">
        <HeroSlider ListaHeros={heros}/>
        <Valors/>
      </section >
      <section id="nosotros" className=" flex flex-col p-8   scroll-mt-16
      relative  gap-2">
        <About/>
      </section>     

      
    </>
  )
}
