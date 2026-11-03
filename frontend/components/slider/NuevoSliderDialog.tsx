"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Pencil,Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import type { Slider } from "./Columns" // "import type" evita un ciclo de imports


const API_URL = process.env.NEXT_PUBLIC_API_URL

const campoNativo =
  "w-full rounded-sm border border-input bg-transparent px-2.5 py-1.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50"

function Campo({ etiqueta, children }: { etiqueta: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5 text-sm font-medium ">
      {etiqueta}
      {children}
    </label>
  )
}

export function NuevoSliderDialog({ slider }: { slider?: Slider }) {
  const editando = Boolean(slider)


  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [enviando, setEnviando] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

  // Libera la vista previa anterior cuando cambia o se desmonta
  useEffect(() => {

    return () => {
      
      if (preview) URL.revokeObjectURL(preview)
    }
  }, [preview])

  function onOpenChange(valor: boolean) {
    setOpen(valor)
    if (!valor) {
      setError(null)
      setPreview(null)
    }
  }

  function onElegirImagen(e: React.ChangeEvent<HTMLInputElement>) {
    const archivo = e.target.files?.[0]
    setPreview(archivo ? URL.createObjectURL(archivo) : null)
    
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setEnviando(true)
    setError(null)


    // NUEVO: URL y método según el modo
    const url = slider
      ? `${API_URL}/dashboard/webpublica/sliders/${slider.id_slider}`
      : `${API_URL}/dashboard/webpublica/sliders`

    try {
      const res = await fetch(url, {
        method: editando ? "PUT" : "POST",
        body: new FormData(e.currentTarget),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => null)
        setError(data?.message ?? "No se pudo guardar el slider")
        return
      }

      onOpenChange(false)
      router.refresh() // vuelve a cargar los datos de la página
    } catch {
      setError("No se pudo conectar con el servidor")
    } finally {
      setEnviando(false)
    }
  }

  return (
    <>
      {editando ? (
        <Button variant="outline" size="icon" aria-label="Editar" onClick={() => setOpen(true)}>
          <Pencil />
        </Button>
      ) : (
        <Button onClick={() => setOpen(true)} className={"w-50 bg-sidebar-primary text-white p-4"}>
          <Plus data-icon="" />
          Nuevo registro
        </Button>
      )}

      <Dialog open={open} onOpenChange={onOpenChange}>
        


          <DialogContent className="p-8 sm:max-w-3xl">         

          <DialogHeader>
            <DialogTitle>{editando ? "Actualizar slider" :"Nuevo slider"}</DialogTitle>
            {/* <DialogDescription>Completa los datos...</DialogDescription> */}
          </DialogHeader>

            <form onSubmit={onSubmit} className="flex flex-col gap-4">

                  <div className="-mx-1 flex max-h-[60dvh] flex-col gap-4 overflow-y-auto py-1 ">  
                        <fieldset className="border border-black/30 rounded-[10px] p-4">
                          <legend className="p-2">Informacion del slider</legend>
                              <Campo etiqueta="Título" >
                                <Input name="titulo_slider" maxLength={150} defaultValue={slider?.titulo_slider ?? ""}/>
                              </Campo>

                              <Campo etiqueta="Descripcion del slider *">
                                <textarea
                                  name="descripcion_slider"
                                  required
                                  maxLength={255}
                                  rows={3}
                                  className={campoNativo}
                                  defaultValue={slider?.descripcion_slider ?? ""}
                                />
                              </Campo>

                              {/* <Campo etiqueta="Seleccione su Imagen" >
                                <Input
                                  type="file"
                                  name="url_imagen"
                                  accept="image/*"
                                  required
                                  onChange={onElegirImagen}
                                />
                                
                                {preview && (
                                  // eslint-disable-next-line @next/next/no-img-element
                                  <img
                                    src={preview}
                                    alt="Vista previa"
                                    className="mt-1 h-32 w-full rounded-lg object-cover"
                                  />
                                )}
                              </Campo> */}

                          <Campo etiqueta={editando ? "Imagen (solo si quieres cambiarla)" : "Imagen *"}>
                              <input
                                type="file"
                                name="url_imagen"
                                accept="image/*"
                                required={!editando}
                                onChange={onElegirImagen}
                                className="peer sr-only"
                              />
                              <span className="inline-flex h-8 w-fit items-center rounded-lg border border-border px-2.5 text-sm peer-focus-visible:ring-3 peer-focus-visible:ring-ring/50">
                                Elegir imagen
                              </span>

                              {(preview ?? slider?.url_imagen) && (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                  src={(preview ?? slider?.url_imagen) as string}
                                  alt="Vista previa"
                                  className="mt-1 h-32 w-full rounded-lg object-cover"
                                />
                              )}
                        </Campo>
                        </fieldset>

                        <fieldset className="border border-black/30 rounded-[10px] p-4">
                          <legend className="p-2">Visibilidad</legend>
                              <div className="grid grid-cols-2 gap-4">
                              <Campo etiqueta="Texto del botón">
                                <Input name="textoboton_slider" maxLength={50} defaultValue={slider?.textoboton_slider ?? ""}/>
                              </Campo>
                              <Campo etiqueta="Enlace del botón">
                                <Input name="urldestino_slider" placeholder="/#matriculas" defaultValue={slider?.urldestino_slider ?? ""}/>
                              </Campo>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                              <Campo etiqueta="Orden">
                                <Input type="number" name="orden_slider" min={1} defaultValue={slider?.orden_slider ?? ""}/>
                              </Campo>
                              <Campo etiqueta="Estado">
                                <select name="estado_slider" defaultValue={slider?.estado_slider ?? "ACTIVO"} className={campoNativo}>
                                  <option value="ACTIVO">ACTIVO</option>
                                  <option value="INACTIVO">INACTIVO</option>
                                </select>
                              </Campo>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                              <Campo etiqueta="Visible desde">
                                <Input type="date" name="fechainicio_slider" defaultValue={slider?.fechainicio_slider ?? ""}/>
                              </Campo>
                              <Campo etiqueta="Visible hasta">
                                <Input type="date" name="fechafin_slider" defaultValue={slider?.fechafin_slider ?? ""}/>
                              </Campo>
                            </div>

                            {error && <p className="text-sm text-destructive">{error}</p>}
                        </fieldset>


                        
                </div>

                <DialogFooter>
                  <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                    Cancelar
                  </Button>
                  <Button type="submit" disabled={enviando}>
                    {enviando 
                    ? (editando ? "Actualizando..." : "Guardando...")
                    : (editando ? "Actualizar" : "Guardar")
                    }
                  </Button>
                </DialogFooter>
            </form>
        </DialogContent>
      </Dialog>
    </>
  )
}