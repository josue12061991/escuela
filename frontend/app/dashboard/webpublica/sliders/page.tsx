import { NuevoSliderDialog } from "@/components/slider/NuevoSliderDialog"

export default function SliderPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <h1 className="text-xl font-semibold">Gestion de sliders</h1>
        <NuevoSliderDialog />
      </div>
    </div>
  )
}