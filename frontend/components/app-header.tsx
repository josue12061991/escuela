import {
  SearchForm,
} from "@/components/search-form"
import Thema from "@/components/layout/Thema";
import {
  
  SidebarTrigger,
} from "@/components/ui/sidebar"


export function Header() {
  return (
    
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 border-b-2 border-gray-400/10">
          <div className="flex w-full justify-between ">
            {/* <SidebarTrigger className="-ml-1 text-red-600" /> */}
            <SidebarTrigger className="" />
            {/* <SearchForm />  */}
            <Thema/>    
          </div>
        </header>
    
  )
}


