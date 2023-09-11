import { useState, useEffect } from 'react';
import css from './Cards.module.css';
import { Card } from '../Card/Card.jsx';
import { useDispatch } from 'react-redux';
import { getAllPrograms } from '../../Redux/actions';
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';

export const Cards = ({ programs }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {}, [programs, dispatch]);

  const handlerClick = (page) => {
    if (page <= 1) setPage(1);
    if (page) setPage(page);
    dispatch(getAllPrograms(page));
  };

  return (
    <div className={css.all}>
      <div className={css.cards}>
        {programs?.map((program) => {
          if (program.id) return <Card key={program.id} program={program} />;
          return <h1>{program}</h1>;
        })}
      </div>

      <div className={css.paginate}>
        <a
          href='#programs'
          className={css.icon}
          onClick={() => handlerClick(page - 1)}
        >
          <GrFormPreviousLink />
        </a>
        {page === 1 ? (
          <button className={css.actual} onClick={() => handlerClick(page)}>
            {page}
          </button>
        ) : (
          <>
            <a
              href='#programs'
              className={css.boton}
              onClick={() => handlerClick(1)}
            >
              1
            </a>
            <button className={css.actual} onClick={() => handlerClick(page)}>
              {page}
            </button>
          </>
        )}
        <a
          href='#programs'
          className={css.boton}
          onClick={() => handlerClick(page + 1)}
        >
          {page + 1}
        </a>
        <a
          href='#programs'
          className={css.boton}
          onClick={() => handlerClick(page + 2)}
        >
          {page + 2}
        </a>
        <a
          href='#programs'
          className={css.boton}
          onClick={() => handlerClick(page + 3)}
        >
          {page + 3}
        </a>
        <a
          href='#programs'
          className={css.icon}
          onClick={() => handlerClick(page + 1)}
        >
          <GrFormNextLink />
        </a>
      </div>
    </div>
  );
};
