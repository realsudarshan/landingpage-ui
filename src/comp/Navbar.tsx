import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "@/comp/Toggle-mode";
import { LogoIcon } from "./Icons";
import { Label } from "@radix-ui/react-dropdown-menu";

interface Routedt{
  href:string;
  label:string;
}
const Routelist:Routedt[]=[
  {
    href:"#features",
    label:"Features"

  },
  {
    href:"#testimonials",
    label:"Testimonials"
  },
  {
    href:"#pricing",
    label:"Pricing"
  }
]
const Navbar=()=>{
const [isOpen,setIsOpen]=useState<boolean>(false)
  return(<>
  <header className="sticky border-b-[1px] top-0 z-40  w-full bg-white dark:bg-background dark:border-b-slate-700">
    hii
    <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
    <a
              rel="noreferrer noopener"
              href="/"
            className="flex">
              <LogoIcon/>
              ShadcnUI/React
            </a>
    </NavigationMenuItem>
    <span className="flex md:hidden">
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
  <SheetTrigger className="px-2"><Menu className=" flex w-20 h-10 md:hidden" onClick={() => setIsOpen(true)}/>
    <span className="sr-only">Menu-icon</span>
  </SheetTrigger>
  <SheetContent side={"left"} >
    <SheetHeader>
      <SheetTitle>ChadcnUI/React</SheetTitle>
     
    </SheetHeader>
 
  <nav className="flex flex-col justify-center items-center gap-2 m-4">
    {Routelist.map(({href, label}:Routedt):any=>(
      <a 
      rel="noreferrer noopener"
      href={href}
      key={label}
      onClick={()=>{
        setIsOpen(false)
       
      }}>
      {label}</a>
      
    ))}
  </nav>
  </SheetContent>
</Sheet>
      <ModeToggle/>
    </span>
  </NavigationMenuList>
</NavigationMenu>
    </header></>)
}
export default Navbar;