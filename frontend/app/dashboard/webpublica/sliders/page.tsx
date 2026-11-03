import { NuevoSliderDialog } from "@/components/slider/NuevoSliderDialog"
import { TablaSlider } from "@/components/slider/Tabla-slider"
import { Image } from 'lucide-react';




export default async function SliderPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dashboard/webpublica/sliders`, { cache: "no-store" })
  const sliders = await res.json()
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-8 ">
        <div className="flex bg-fondosidebarcontent rounded-md p-4 gap-4 border border-border">
          <Image className="w-14 h-14 "/>
          <div className="">
            <h1 className="text-xl font-semibold text-letras dark:text-white">Gestion de sliders</h1>
            <span className="font-light">Administra las imagenes que se ven en la web publica</span>
          </div>
        </div>
        {/* <NuevoSliderDialog /> */}
        <TablaSlider sliders={sliders} />
      </div>
    </div>
  )
}