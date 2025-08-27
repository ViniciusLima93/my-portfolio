'use client'
import Image from "next/image"

type AboutId = {
    ID: string
}

export const About = ({ID}: AboutId) => {
    return (
        <main id={`${ID}`} className="container mx-auto grid grid-cols-2 gap-8 p-8">
        <section className="flex flex-col text-justify space-y-4">
            <em className=" text-center text-xl font-semibold">Olá, eu sou o Vinicius</em>
            <p>
                Como engenheiro de produção, minha atuação na área de programação começou como hobbie.
                Sempre muito curioso em saber como o mundo de variáveis, funções e classes poderiam gerar
                aplicações incriveis.

            </p>
            <p>
                Estudando avulso e com pouca orientação consegui colocar em prática algumas soluções no trabalho.
                Como automatização de relatórios e confecção de planilhas, tudo com auxilio de programação.
                O que me possibilitou atuar em projetos internos de melhorias e , conseguentemente, no desenvolvimento de software
                *-*
            </p>
            <p>
                Hoje,tenho a convicção que fiz a escolha certa e sou apaixonado por criar soluções, atuar em todas as etapas de desenvolvimento.
                Desde a elucidação de requisitos a codificação plena,em front-end e backend.Curto muito como os problemas podem ser enfrentados e
                solucionados com ajuda da tecnologias 
            </p>
        </section>
        <section className="flex justify-center items-center bg-" >
            <Image
            className="rounded-2xl"
            src="/Me.jpeg"
            width={200}
            height={200}
            alt="Picture of me"
            />
        </section>

        </main>
     
    )
}