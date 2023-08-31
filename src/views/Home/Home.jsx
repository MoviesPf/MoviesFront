import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavBar } from '../../Components/NavBar/NavBar';
import { Portrait } from '../../Components/Portrait/Portrait';
import { Genres } from '../../Components/Genres/Genres';
import Platforms from '../../Components/Platforms/Platforms';
import { Cards } from '../../Components/Cards/Cards';
import { getAllMovies } from '../../Redux/actions';
import css from './Home.module.css';

export const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  return (
    <div className={css.background}>
      <NavBar />
      <Portrait movies={movies}/>
      <Genres />
      <Platforms />
      <h1 className={css.subTitle}>Latest Releases</h1>
      <Cards movies={movies} />
    </div>
  );
};