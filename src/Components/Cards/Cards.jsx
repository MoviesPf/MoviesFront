import { useState, useEffect } from 'react';
import css from './Cards.module.css';
import { Card } from '../Card/Card.jsx';

export const Cards = ({ programs }) => {
  const cantPrograms = programs.length;
  const programList = cantPrograms > 8 ? programs.slice(9, cantPrograms) : ['No hay mas programas'];

  const [currentPage, setCurrentPage] = useState(1);
  const programsForPage = 32;

  const lastProgramIndex = currentPage * programsForPage;
  const fisrtProgramIndex = lastProgramIndex - programsForPage;

  const allPrograms = programList.slice(fisrtProgramIndex, lastProgramIndex);

  useEffect(() => {
    if (!allPrograms.length) {
      setCurrentPage(1);
    }
  }, [allPrograms]);

  const paginate = (numeroPagina) => setCurrentPage(numeroPagina);

  return !programList.length ? (
    <h1></h1>
  ) : (
    <div className={css.all}>
      <div className={css.cards}>
        {allPrograms.map((program) => {
          if (program.id) return <Card key={program.id} program={program} />;
          return <h1>{program}</h1>;
        })}
      </div>

      <div className={css.paginate}>
        <button
          className={css.boton}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          ←
        </button>
        {programList.length > programsForPage &&
          Array(Math.ceil(programList.length / programsForPage))
            .fill()
            .map((_, index) => (
              <button
                className={currentPage === index + 1 ? css.actual : css.boton}
                key={index}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            ))}
        <button
          className={css.boton}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          →
        </button>
      </div>
    </div>
  );
};
