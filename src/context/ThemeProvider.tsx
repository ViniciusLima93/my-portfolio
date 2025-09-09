'use client'

import { ReactNode, useState } from "react";
import {ThemeContext} from "./ThemeContext"


interface ThemeProviderProps {
    children: ReactNode;
}



export default function ThemeProvider ({children} : ThemeProviderProps) {
    const [isDark, setDark] = useState(false);

     const toogleTheme = () => setDark((prev) => !prev);


    return (
        <ThemeContext.Provider value={{isDark, toogleTheme}}>
             <div className={isDark ? "dark" : ""}>{children}</div>
        </ThemeContext.Provider>

    )
};

