'use client'
import { NavBar } from "@/components/Navbar";
import {Hero} from "@/components/Hero"
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Projects } from "@/components/Projects";
import { useContext} from "react";
import { ThemeContext } from "@/context/ThemeContext";
import {ToggleRight, ToggleLeft, SunDim, Moon} from 'lucide-react'


export default function Home() {


  const context = useContext(ThemeContext)
  if(!context) return null

  const {isDark, toogleTheme} = context

   return (
    <div className={isDark ? "dark" : ""}>
    <main className=" bg-primary dark:bg-primary-dark dark:text-white flex min-h-screen flex-col items-center">
       <div className="flex  flex-row-reverse justify-end items-center w-full px-18 py-3"> 
          <button 
            className="flex items-left" 
            onClick={toogleTheme}
          >
            {isDark ? <><Moon size={32} /> <ToggleLeft size={28} /></> : <><ToggleRight size={28} /> <SunDim size={32} /></>}
          </button> 
          <NavBar />
        </div>
      <div className="container mt-24 mx-auto px-12 py-4">
        <Hero ID="hero"/>
        <About ID="about"/>
        <Projects ID="projects" />
        <Skills ID="skills"/>
      </div>
      <hr/>
      <Contact ID="contact" />
    </main>
   
    </div>
  );
}


