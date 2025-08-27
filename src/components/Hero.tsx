
'use client'
import Typewriter from "typewriter-effect"


type HeroProps = {
    ID: string
}

export const Hero = ({ID}: HeroProps) => {


    return (
        <div id={`${ID}`} className="text-center text-2xl top-0.5">
        <p>Bem vindo ao meu portfólio</p>

        <i>Curto transformar ideias em soluções</i> 🧑‍💻
        
         <Typewriter
            options={{
                strings: ['FullStack Developer 🚀'],
                autoStart: true,
                loop: true,
            }}
            />
        
        </div>
    )
}