import React from "react";

import {
  SidebarInset,
  SidebarProvider,
  
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Header} from "@/components/app-header"
export default function DashboadrLayout({children}:{children:React.ReactNode}) {
    
    return (
    
    <SidebarProvider  className="">
        <AppSidebar  />
        
        <SidebarInset  className="bg-fondosidebarinset text-textosidebarcontent px-2 border border-white">
            <Header/>
            <main className="flex-1 border border-white">
                {children}
            </main>
        </SidebarInset>  
    </SidebarProvider>     
        
    
    )
}