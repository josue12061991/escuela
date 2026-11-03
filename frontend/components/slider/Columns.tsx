"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, Pencil, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader,
  AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { NuevoSliderDialog } from "@/components/slider/NuevoSliderDialog"


const API_URL = process.env.NEXT_PUBLIC_API_URL


export type Slider = {
  id_slider: number
  titulo_slider: string | null
  descripcion_slider: string
  textoboton_slider: string | null
  urldestino_slider: string | null
  url_imagen: string
  orden_slider: number | null
  estado_slider: "ACTIVO" | "INACTIVO"
  fechainicio_slider: string | null
  fechafin_slider: string | null
}



function Acciones({ slider }: { slider: Slider }) {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)

  async function eliminar() {
    setError(null)
    try {
      const res = await fetch(`${API_URL}/dashboard/webpublica/sliders/${slider.id_slider}`, { method: "DELETE" })
      if (!res.ok) return setError("No se pudo eliminar")
      router.refresh()
    } catch {
      setError("Sin conexión con el servidor")
    }
  }

  return (
    <div className="flex items-center justify-end gap-2">
      {error && <span className="text-xs text-destructive">{error}</span>}
      {/* <Button variant="outline" size="icon" aria-label="Editar">
        <Pencil />
      </Button> */}
      <NuevoSliderDialog slider={slider} />
      <AlertDialog>
        <AlertDialogTrigger className={""}
            render={<Button variant="hoverdelete" size="icon" aria-label="Eliminar" />}
            >
          <Trash2 className={""}/>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Eliminar este slider?</AlertDialogTitle>
            <AlertDialogDescription>Esta acción no se puede deshacer.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={eliminar} >Eliminar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export const columns: ColumnDef<Slider>[] = [
  {
    accessorKey: "url_imagen",
    header: "Imagen",
    enableSorting: false,
    cell: ({ row }) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={row.original.url_imagen} alt="" className="h-8 w-8 rounded-full object-cover" />
    ),
  },
  {
    id: "titulo_slider",
    accessorFn: (row) => row.titulo_slider ?? "",
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} className={"font-extrabold"}>
        Título <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => row.original.titulo_slider || "—",
  },
  {
    accessorKey: "orden_slider",
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} className={"font-extrabold"}>
        Orden <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => row.original.orden_slider ?? "—",
  },
  {
    accessorKey: "estado_slider",
    header: "Estado",
    cell: ({ row }) => (
      <Badge variant={row.original.estado_slider === "ACTIVO" ? "prueba" : "secondary"}>
        {row.original.estado_slider}
      </Badge>
    ),
  },
  {
    id: "acciones",
    header: () => <div className="text-right">Acciones</div>,
    cell: ({ row }) => <Acciones slider={row.original} />,
  },
]