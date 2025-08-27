import { Cards } from "./Informs/Cards";


type ProjectsProps = {
    ID: string
}

export const Projects = ({ID}: ProjectsProps) => {

   const projects = [
        {id:0, title: "Data Collection and Visualization",tecnologie:"ExpressJS, TypeORM, React, MySQL", description:"Desenvolvi uma solução completa para coleta e visualização de dados de produção em tempo real. O sistema integrava-se diretamente às bases de dados das máquinas SMT para monitorar e classificar a produção de placas como 'OK' ou 'NG' (Não Conformidade). O front-end, intuitivo e responsivo, permitia que os usuários acompanhassem o desempenho da linha de produção através de dashboards e gráficos dinâmicos, oferecendo insights valiosos para o controle de qualidade e a tomada de decisões." },
        {id:1, title: "SOPs-Standard Operating Procedure",tecnologie:"NestJS, React, MongoDB, Kafka", description:"Criei uma plataforma para automatizar a distribuição de instruções de trabalho (SOPs) para a linha de produção. A solução permitia a criação de apresentações dinâmicas (slides) que eram enviadas via sistema de mensageria Kafka para hardware específico nas estações de trabalho, garantindo que os operadores tivessem acesso imediato às instruções atualizadas. Isso simplificou o processo de comunicação e aumentou a eficiência operacional da linha." },
        {id:2, title: "Line Balancing Simulation",tecnologie:"NestJS, React, MongoDB", description:"Desenvolvi uma ferramenta de simulação estratégica que utilizava dados de produção em tempo real para calcular KPIs essenciais. O sistema permitia a simulação de diversos cenários, como variações na demanda de produção, otimizando o dimensionamento de pessoal, o tempo de ciclo e a efetividade da execução. Essa solução forneceu à gerência uma poderosa ferramenta para o planejamento de capacidade e a otimização de recursos, resultando em um balanceamento de linha mais preciso." },
    ]

    return (
        <div id={`${ID}`}>
        <p className="text-xl text-center p-3"> Projects</p>
        <section className="container flex justify-between gap-4">
          {
           projects.map((project) => {
            return(
                <Cards
                 key={project.id}
                 descrpition={project.description}
                 tecnologie={project.tecnologie}
                 title={project.title}
                
                />
            )
           })
          } 
        </section>
        </div >
      
        
        
    )
}