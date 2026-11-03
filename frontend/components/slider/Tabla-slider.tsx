"use client"

import { DataTable } from "./Data-table"
import { columns, Slider } from "./Columns"
import { NuevoSliderDialog } from "./NuevoSliderDialog"

export function TablaSlider({ sliders }: { sliders: Slider[] }) {
  return (
    <DataTable
      columns={columns}
      data={sliders}
      botonNuevo={<NuevoSliderDialog />}
      columnaFiltro="titulo_slider"
      placeholderFiltro="Buscar por título..."
    />
  )
}