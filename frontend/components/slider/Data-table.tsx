"use client"

import { useState } from "react"
import {
  ColumnDef, ColumnFiltersState, SortingState, flexRender,
  getCoreRowModel, getFilteredRowModel, getPaginationRowModel,
  getSortedRowModel, useReactTable,
} from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table"

// import { NuevoSliderDialog } from "@/components/slider/NuevoSliderDialog"


interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  botonNuevo?: React.ReactNode   // el botón de "nuevo registro" de cada módulo
  columnaFiltro?: string         // en qué columna busca el input
  placeholderFiltro?: string
}

export function DataTable<TData, TValue>({
  columns, data, botonNuevo, columnaFiltro, placeholderFiltro = "Buscar...",
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const table = useReactTable({
    data,
    columns,
    state: { sorting, columnFilters },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: 5 } },
  })

  return (
    <div className="flex flex-col gap-6">
        <div className="flex justify-between bg-transparent">
          {botonNuevo}
          {columnaFiltro && (
            <div className="flex gap-2 items-center">
              <label className="font-bold">Buscar:</label>
              <Input
                placeholder={placeholderFiltro}
                value={(table.getColumn(columnaFiltro)?.getFilterValue() as string) ?? ""}
                onChange={(e) => table.getColumn(columnaFiltro)?.setFilterValue(e.target.value)}
                className="max-w-sm placeholder:font-light"
              />
            </div>
          )}
        </div>

      <div className="overflow-x-auto rounded-lg border border-border  bg-fondosidebarcontent p-4">
        <Table className="">
          <TableHeader>
            {table.getHeaderGroups().map((grupo) => (
              <TableRow key={grupo.id}>
                {grupo.headers.map((h) => (
                  <TableHead key={h.id} className="">
                    {h.isPlaceholder ? null : flexRender(h.column.columnDef.header, h.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="">
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} className="bg-fondoceldas rounded-2xl">
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center text-muted-foreground">
                  Sin resultados
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">
          Página {table.getState().pagination.pageIndex + 1} de {table.getPageCount() || 1}
        </span>
        <div className="flex gap-2">
          <Button variant="nextprev" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
            Anterior
          </Button>
          <Button variant="nextprev" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            Siguiente
          </Button>
        </div>
      </div>
    </div>
  )
}