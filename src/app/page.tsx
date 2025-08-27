import { NavBar } from "@/components/Navbar";
import {Hero} from "@/components/Hero"
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Projects } from "@/components/Projects";

export default function Home() {

   return (
    <main className=" bg-white dark:bg-gray-900 flex min-h-screen flex-col items-center">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Hero ID="hero"/>
        <About ID="about"/>
        <Projects ID="projects" />
        <Skills ID="skills"/>
      </div>
      <hr/>
      <Contact ID="contact" />
    </main>
   
  );
}
