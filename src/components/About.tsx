'use client'
import Image from "next/image"

type AboutId = {
    ID: string
}

export const About = ({ID}: AboutId) => {
   return (
  <main 
    id={ID} 
    className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-12"
  >
    {/* Texto */}
    <section className="flex flex-col text-justify space-y-4">
      <em className="text-center text-xl md:text-2xl font-semibold">
        Olá, eu sou o Vinicius
      </em>
      
      <p>
        Como engenheiro de produção, minha atuação na área de programação começou como hobbie.
        Sempre muito curioso em saber como o mundo de variáveis, funções e classes poderiam gerar
        aplicações incríveis.
      </p>

      <p>
        Estudando avulso e com pouca orientação consegui colocar em prática algumas soluções no trabalho,
        como automatização de relatórios e confecção de planilhas, tudo com auxílio de programação.
        O que me possibilitou atuar em projetos internos de melhorias e, consequentemente,
        no desenvolvimento de software ✨
      </p>

      <p>
        Hoje, tenho a convicção que fiz a escolha certa e sou apaixonado por criar soluções,
        atuando em todas as etapas de desenvolvimento: desde a elucidação de requisitos
        até a codificação plena, em front-end e back-end.
        Curto muito como os problemas podem ser enfrentados e solucionados com ajuda da tecnologia 🚀
      </p>
    </section>

    {/* Imagem */}
    <section className="flex justify-center items-center">
      <Image
        className="rounded-2xl shadow-lg w-48 h-48 md:w-64 md:h-64 object-cover"
        src="/Me.jpeg"
        width={256}
        height={256}
        alt="Picture of me"
      />
    </section>
  </main>
)

}