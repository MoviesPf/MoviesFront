import { useState } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import css from './NavBar.module.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SearchedCard } from '../SearchedCard/SearchedCard';
import { BiSolidCameraMovie } from 'react-icons/bi';
import {
  getAllPrograms,
  getGenres,
  getAllMovies,
  getMovieGenres,
  getAllSeries,
  getSeriesGenres,
  logoutUser
} from '../../Redux/actions';

export const NavBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const searchedPrograms = useSelector((state) => state.searchedPrograms);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [searched, setSearched] = useState(false);
  const [category, setCategory] = useState('main');

  const toggleShow = () => {
    setShow(!show);
  };

  const AllPrograms = () => {
    dispatch(getAllPrograms());
    dispatch(getGenres());
    setCategory('main');
  };

  const Movies = () => {
    dispatch(getAllMovies());
    dispatch(getMovieGenres());
    setCategory('movies');
  };

  const Series = () => {
    dispatch(getAllSeries());
    dispatch(getSeriesGenres());
    setCategory('series');
  };

  return (
    <div className={css.allNavbar}>
      <div className={css.background}>
        <div className={css.contRight}>
          <Link to='/' className={css.logo}>
            <BiSolidCameraMovie />
            <h1>GreenScreen</h1>
          </Link>
        </div>

        {pathname === '/' && (
          <div className={css.contMid}>
            <button
              className={category === 'main' ? css.typesP : css.types}
              onClick={AllPrograms}
            >
              Main
            </button>
            <button
              className={category === 'movies' ? css.typesP : css.types}
              onClick={Movies}
            >
              Movies
            </button>
            <button
              className={category === 'series' ? css.typesP : css.types}
              onClick={Series}
            >
              Series
            </button>
          </div>
        )}

        <div className={css.contLeft}>
          <button
            type='button'
            className={css.searchButton}
            onClick={toggleShow}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              viewBox='0 0 16 16'
            >
              <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
            </svg>
          </button>
          {user.name ? (
            <button
              onClick={() => dispatch(logoutUser())}
              className={css.sesion}
            >
              Logout
            </button>
          ) : (
            <div>
              <button onClick={() => navigate('/login')} className={css.sesion}>
                Login
              </button>

              <button
                onClick={() => navigate('/signin')}
                className={css.sesion}
              >
                Sign In
              </button>
            </div>
          )}
        </div>
      </div>
      {show && (
        <div className={css.searchComponent}>
          <SearchBar
            setSearched={setSearched}
            searched={searched}
            setShow={setShow}
            show={show}
          />
          {
            <div className={css.cartas}>
              {!searched ? (
                <h1 className={css.message}>
                  {' '}
                  Search for a Movie/Serie here ↑↑
                </h1>
              ) : searchedPrograms.length ? (
                searchedPrograms.map((program) => {
                  return (
                    <SearchedCard
                      key={program.id}
                      program={program}
                      setShow={setShow}
                      show={show}
                    />
                  );
                })
              ) : (
                <h1 className={css.message}> Movie/Serie Not Found </h1>
              )}
            </div>
          }
          <div className={css.bottom}>bottom</div>
        </div>
      )}
    </div>
  );
};
