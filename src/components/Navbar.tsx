import Link from "next/link"
import {Github, Linkedin} from 'lucide-react'

export const NavBar = () => {
    return (
      <main className="container flex flex-col col-start-12">
      <section className="flex justify-start absolute left-16 top-2">
        <a 
        href="https://www.linkedin.com/in/vinicius-lima-9a041b139/" target="_blank" className="p-2">
            <Linkedin size={28}  />
        </a>
        <a href="https://github.com/ViniciusLima93" target="_blank" className="p-2">
         <Github size={28} />

        </a>
      </section>
      <section className=" container text-right p-4">
           <Link className="p-2 m-0.5" href="/#about">About Me</Link>
            <Link className="p-2 m-0.5"  href="/#projects">Projects</Link>
            <Link className="p-2 m-0.5" href="/#skills">Skills</Link>
            <Link className="p-2 m-0.5" href="/#contact">Contact</Link>
      </section>
      
      </main>  
    )

}

