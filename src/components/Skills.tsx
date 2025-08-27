import Image from "next/image"


type SkillsProps = {
    ID: string
}

export const Skills = ({ID}: SkillsProps) => {
    
    const images = [
        {id:0, image:'/js.png',subtitle:''},
        {id:1, image:'/typescript.png',subtitle:''},
        {id:2, image:'/nest.webp',subtitle:''},
        {id:3, image:'/express.png',subtitle:''},
        {id:4, image:'/react.png',subtitle:''},
        {id:5, image:'/next.png',subtitle:''},
        {id:6, image:'/vite.png',subtitle:''},
        {id:7, image:'/mongo.png',subtitle:''},
        {id:8, image:'/github.png',subtitle:''},
        {id:9, image:'/gitlab.png',subtitle:''}
    ]

   
    return (
      <section id={ID}>
        <p className="text-xl text-center p-3">Skills</p>
        <aside className="flex flex-row p-2">
           {
            images.map((i) => {
                return (
                    <Image
                        width={90}
                        height={120}
                        key={i.id}
                       src={i.image}
                       alt={i.subtitle}
                    />
                )
            })
           }
        </aside>

      </section>
    )
}