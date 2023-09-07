import css from "./Cards.module.css"
import { Card } from "../Card/Card.jsx"

export const Cards = ({ programs }) => {
    const cantPrograms = programs.length
    const programList = cantPrograms > 8 
    ? programs.slice(9, cantPrograms)
    : ["No hay mas programas"]
    return(
        !programList.length 
        ? <h1>Hola</h1>
        : <div className={css.container}>
            {
                programList.map((program)=> {
                    if (program.id) {
                        return (
                            <Card key={program.id} program={program}/>
                        )
                    } else {
                        return <h1>{program}</h1>
                    }
                })
            }
        </div>
    )
};