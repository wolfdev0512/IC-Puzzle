import dynamic from "next/dynamic"

export const Menu = dynamic(() => import("./Menu/Menu"))
export const MobileMenu = dynamic(() => import("./MobileMenu/MobileMenu"))
export const DropdownMenu = dynamic(() => import("./DropdownMenu/DropdownMenu"))
