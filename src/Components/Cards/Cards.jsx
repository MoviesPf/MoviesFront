import css from "./Cards.module.css"
import { Card } from "../Card/Card.jsx"

export const Cards = ({ programs }) => {
    const programList = programs
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
                        }
                    })
                }
        </div>
    )
};