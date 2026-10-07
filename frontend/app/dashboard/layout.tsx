import React from "react";

import {
  SidebarInset,
  SidebarProvider,
  
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Header} from "@/components/app-header"
export default function DashboadrLayout({children}:{children:React.ReactNode}) {
    
    return (
    
    <SidebarProvider >
        <AppSidebar  />
        
        <SidebarInset  className="">
            <Header/>
            <main className="flex-1">
                {children}
            </main>
        </SidebarInset>  
    </SidebarProvider>     
        
    
    )
}