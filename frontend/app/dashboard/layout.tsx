import React from "react";

export default function DashboadrLayout({children}:{children:React.ReactNode}) {
    
    return (
    <div className="flex min-h-screen">
        <aside className="w-64 bg-slate-900 text-white p-4 flex flex-col gap-2">
            <h2 className="font-bold text-lg mb-6">Panel de gestión</h2>
            {/* Aquí luego irá el menú dinámico según permisos del usuario */}
        </aside>
        <main className="flex-1 p-8">
            {children}
        </main>
    </div>
    )
}