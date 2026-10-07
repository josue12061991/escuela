"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
// import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { GalleryVerticalEndIcon, AudioLinesIcon, TerminalIcon, User , BotIcon, BookOpenIcon, Settings2Icon, FrameIcon, PieChartIcon, MapIcon } from "lucide-react"

// This is sample data.
const data = {
  user: {
    name: "Josue",
    email: "Josue@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Sede Jr 2 de Mayo",
      logo: (
        <GalleryVerticalEndIcon
        />
      ),
      plan: "Sede principal",
    },
    {
      name: "Sede Jr Arequipa",
      logo: (
        <AudioLinesIcon
        />
      ),
      plan: "Sucursal 1",
    },
    {
      name: "Sede Huanta",
      logo: (
        <TerminalIcon
        />
      ),
      plan: "Sucursal 2",
    },
  ],
  navMain: [
    {
      title:"Dashboard",
      url:"/dashboard",
      icon:(
        <User/>
      )
    },
    {
      title: "Personas",
      url: "/dashboard/Personas",
      icon: (
        <User 
        />
      ),
      isActive: true,
      items: [
        {
          title: "Alumnos",
          url: "/dashboard/Personas/Alumnos",
        },
        {
          title: "Docentes",
          url: "/dashboard/Personas/Docentes",
        },
        {
          title: "Administrativos",
          url: "/dashboard/Personas/Administrativos",
        },
      ],
    },
    {
      title: "Academico",
      url: "/dashboard/academico",
      icon: (
        <BotIcon
        />
      ),
      items: [
        {
          title: "Año academico",
          url: "#",
        },
        {
          title: "Grados",
          url: "#",
        },
        {
          title: "Secciones",
          url: "#",
        },
      ],
    },
    {
      title: "Areas",
      url: "/dashboard/Cursos",
      icon: (
        <BookOpenIcon
        />
      ),
      items: [
        {
          title: "Cursos",
          url: "#",
        },        
        {
          title: "Asignacion de cursos",
          url: "#",
        },
        
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: (
        <Settings2Icon
        />
      ),
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
