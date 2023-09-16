import { useState, useEffect } from 'react';
import css from './Cards.module.css';
import { Card } from '../Card/Card.jsx';
import { useDispatch } from 'react-redux';
import { getAllPrograms } from '../../Redux/actions';
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';

export const Cards = ({ programs, limit }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {}, [programs, dispatch]);

  const handlerClick = (page) => {
    console.log(page);
    if (page > limit || page < 1) return;
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
        {/* next */}
        <a
          href='#programs'
          className={css.icon}
          onClick={() => handlerClick(page - 1)}
        >
          <GrFormPreviousLink />
        </a>

        {/* pos 1 */}

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
            <button
              className={page > limit - 3 ? css.boton : css.actual}
              onClick={() => handlerClick(page > limit - 3 ? limit - 3 : page)}
            >
              {page > limit - 3 ? limit - 3 : page}
            </button>
          </>
        )}
        <a
          href='#programs'
          className={
            page > limit - 2 || page < limit - 2 ? css.boton : css.actual
          }
          onClick={() =>
            handlerClick(page + 1 > limit - 2 ? limit - 2 : page + 1)
          }
        >
          {page + 1 > limit - 2 ? limit - 2 : page + 1}
        </a>
        <a
          href='#programs'
          className={
            page > limit - 1 || page < limit - 1 ? css.boton : css.actual
          }
          onClick={() =>
            handlerClick(page + 2 > limit - 1 ? limit - 1 : page + 2)
          }
        >
          {page + 2 > limit - 1 ? limit - 1 : page + 2}
        </a>
        <a
          href='#programs'
          className={page > limit || page < limit ? css.boton : css.actual}
          onClick={() => handlerClick(limit)}
        >
          {limit}
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
