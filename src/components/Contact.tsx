

type ContactProps = {
    ID: string
}


export const Contact = ({ID}: ContactProps) => {
    return (
        <div id={ID}>
        
            <p className="text-xl text-center p-3">Aberto a novas oportunidades</p>

           <div className="container text-right text-sm grid grid-cols-2 gap-10 p-8">
            <section className="right-4">
                <strong>Telefone</strong>
                <p className="tex-sm">+55 (92) 984028400</p>
            </section>

             <section>
                <strong>Email</strong>
                <p>vnlima9@gmail.com</p>
            </section>  
            </div>
        </div>
    )
}