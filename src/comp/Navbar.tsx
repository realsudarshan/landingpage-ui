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
    <NavigationMenu>
  <NavigationMenuList className="h-14 px-4 w-screen flex justify-between">
    <NavigationMenuItem >
    <a
              rel="noreferrer noopener"
              href="/"
            className="flex">
              <LogoIcon/>
              ShadcnUI/React
            </a>
    </NavigationMenuItem>
    <NavigationMenuItem>
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
     <a
                    rel="noreferrer noopener"
                    href="https://github.com/realsudarshan"
                    target="_blank"
                    className={`w-[110px] border ${buttonVariants({
                      variant: "secondary",
                    })}`}
                  >
                    <GitHubLogoIcon className="mr-2 w-5 h-5" />
                    Github
                  </a>
  </nav>
  </SheetContent>
</Sheet>
<ModeToggle/>
</span>
</NavigationMenuItem>
<NavigationMenuItem className="hidden md:flex w-full md:justify-between  md:pl-96">

<nav className="hidden md:flex md:gap-2 ">
            {Routelist.map((route: Routedt, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
            
          </nav>
          <ModeToggle />
          
         
          
    

</NavigationMenuItem>
    
  </NavigationMenuList>
</NavigationMenu>
    </header></>)
}
export default Navbar;