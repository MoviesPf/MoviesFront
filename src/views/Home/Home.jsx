import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavBar } from '../../Components/NavBar/NavBar';
<<<<<<< HEAD
import { Genders } from '../../Components/Genders/Genres';
import Platforms from '../../Components/Platforms/Platforms';
import { Cards } from '../../Components/Cards/Cards';
import { getAllMovies } from '../../Redux/actions';
import css from './Home.module.css';
=======
import { Genders } from '../../Components/Genders/Genders';
import Platforms from '../../Components/Platforms/Platforms';
import { Cards } from '../../Components/Cards/Cards';
import { getAllMovies } from '../../Redux/actions';

>>>>>>> 157ba88a6ceea2bc438e0da512bb8995c7a0bdc2

export const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  return (
<<<<<<< HEAD
    <div className={css.background}>
      <NavBar />
      <div className={css.cover}>

      </div>
=======
    <div>
      <NavBar />
>>>>>>> 157ba88a6ceea2bc438e0da512bb8995c7a0bdc2
      <Genders />
      <Platforms />
      <Cards movies={movies} />
    </div>
  );
};