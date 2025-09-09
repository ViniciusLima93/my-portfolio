'use client'
import { createContext} from "react"


interface ThemeProps {
    
    isDark: boolean
    toogleTheme: () => void
}
   
export const ThemeContext =  createContext<ThemeProps | undefined>(undefined)


  
