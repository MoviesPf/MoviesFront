import style from './Paginate.module.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllMovies,
  getAllPrograms,
  getAllSeries,
  programsFilters
} from '../../Redux/actions';
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';

const Paginate = ({ limit, type, filters, programs }) => {
  const dispatch = useDispatch();
  const actFilt = useSelector((state) => state.activeFilters);

  const [page, setPage] = useState(1);

  useEffect(() => {}, [programs, dispatch, actFilt]);
  useEffect(() => {
    setPage(1);
  }, [limit]);

  const handlerClick = (page) => {
    if (page > limit || page < 1) return;
    if (page <= 1) setPage(1);
    if (page) setPage(page);

    if (filters === 'filters') {
      console.log('filtros');
      if (type === 'main') {
        dispatch(programsFilters(actFilt, page));
      } else if (type === 'movies') {
        dispatch(programsFilters(actFilt, page));
      } else if (type === 'series') {
        dispatch(programsFilters(actFilt, page));
      }
    } else {
      if (type === 'main') {
        dispatch(getAllPrograms(page));
      } else if (type === 'movies') {
        dispatch(getAllMovies(page));
      } else if (type === 'series') {
        dispatch(getAllSeries(page));
      }
    }
  };

  return (
    <div className={style.container}>
      <a
        href='#programs'
        className={style.icon}
        onClick={() => handlerClick(page - 1)}
      >
        <GrFormPreviousLink />
      </a>
      {limit === 1 ? (
        <button className={style.actual} onClick={() => handlerClick(1)}>
          1
        </button>
      ) : limit === 2 ? (
        <>
          <a
            className={page === 1 ? style.actual : style.button}
            onClick={() => handlerClick(1)}
          >
            1
          </a>
          <a
            className={page === 2 ? style.actual : style.button}
            onClick={() => handlerClick(2)}
          >
            2
          </a>
        </>
      ) : limit === 3 ? (
        <>
          <a
            className={page === 1 ? style.actual : style.button}
            onClick={() => handlerClick(1)}
          >
            1
          </a>
          <a
            className={page === 2 ? style.actual : style.button}
            onClick={() => handlerClick(2)}
          >
            2
          </a>
          <a
            className={page === 3 ? style.actual : style.button}
            onClick={() => handlerClick(3)}
          >
            3
          </a>
        </>
      ) : limit === 4 ? (
        <>
          <a
            className={page === 1 ? style.actual : style.button}
            onClick={() => handlerClick(1)}
          >
            1
          </a>
          <a
            className={page === 2 ? style.actual : style.button}
            onClick={() => handlerClick(2)}
          >
            2
          </a>
          <a
            className={page === 3 ? style.actual : style.button}
            onClick={() => handlerClick(3)}
          >
            3
          </a>
          <a
            className={page === 4 ? style.actual : style.button}
            onClick={() => handlerClick(4)}
          >
            4
          </a>
        </>
      ) : (
        <>
          {/* pos 1 */}

          {page === 1 ? (
            <button className={style.actual} onClick={() => handlerClick(page)}>
              {page}
            </button>
          ) : (
            <>
              <a
                href='#programs'
                className={style.button}
                onClick={() => handlerClick(1)}
              >
                1
              </a>
              <button
                className={page > limit - 3 ? style.button : style.actual}
                onClick={() =>
                  handlerClick(page > limit - 3 ? limit - 3 : page)
                }
              >
                {page > limit - 3 ? limit - 3 : page}
              </button>
            </>
          )}
          <a
            href='#programs'
            className={
              page > limit - 2 || page < limit - 2 ? style.button : style.actual
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
              page > limit - 1 || page < limit - 1 ? style.button : style.actual
            }
            onClick={() =>
              handlerClick(page + 2 > limit - 1 ? limit - 1 : page + 2)
            }
          >
            {page + 2 > limit - 1 ? limit - 1 : page + 2}
          </a>
          <a
            href='#programs'
            className={
              page > limit || page < limit ? style.button : style.actual
            }
            onClick={() => handlerClick(limit)}
          >
            {limit}
          </a>
        </>
      )}
      <a
        href='#programs'
        className={style.icon}
        onClick={() => handlerClick(page + 1)}
      >
        <GrFormNextLink />
      </a>
    </div>
  );
};

export default Paginate;
