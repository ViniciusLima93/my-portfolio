import Link from "next/link"
import {Github, Linkedin} from 'lucide-react'

export const NavBar = () => {
    return (
      <main className="container flex flex-col md:flex-row justify-between items-center p-4">
      <section className="flex gap-4 mb-4 md:mb-0">
        <a 
        href="https://www.linkedin.com/in/vinicius-lima-9a041b139/" target="_blank" className="p-2">
            <Linkedin size={28}  />
        </a>
        <a href="https://github.com/ViniciusLima93" target="_blank" className="p-2">
         <Github size={28} />

        </a>
      </section>
      <section className="flex flex-wrap justify-center md:justify-end gap-2">
           <Link className="p-2 m-0.5" href="/#about">About Me</Link>
            <Link className="p-2 m-0.5"  href="/#projects">Projects</Link>
            <Link className="p-2 m-0.5" href="/#skills">Skills</Link>
            <Link className="p-2 m-0.5" href="/#contact">Contact</Link>
      </section>
      
      </main>  
    )

}

