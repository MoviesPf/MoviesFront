import { Card } from '../Card/Card'
import css from './Carrusel.module.css';

export const Carrusel = ({ programs }) => {

  const allPrograms = programs.slice(0,8)

  return (
    <div className={css.contenedor}>
      <div className={css.crsl}>
        {
          allPrograms.map((program)=> {
            if (program.id) {
              return (
                <Card key={program.id} program={program}/>
              )
            }
          })
        }
      </div>
    </div>
  );
};