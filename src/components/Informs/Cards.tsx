'use client'


interface SkillsCardProps {
    tecnologie: string,
    title:string,
    descrpition: string
}
export  const Cards = ({title, tecnologie,descrpition}: SkillsCardProps) => {
    return (
        <>
            <div className="max-w-md border border-gray-200 rounded-2xl shadow-md p-6">
                <p className="text-sm font-bold text-center">{tecnologie}</p>
                <p className="text-lg text-center font-semibold mt-2 p-2">{title}</p>
                <span className="block mt-1 text-justify">
                    {descrpition}
                </span>
            </div>
        </>
    )
}