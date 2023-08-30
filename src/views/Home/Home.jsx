import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavBar } from '../../Components/NavBar/NavBar';
import { Genders } from '../../Components/Genders/Genders';
import Platforms from '../../Components/Platforms/Platforms';
import { Cards } from '../../Components/Cards/Cards';
import { getAllMovies } from '../../Redux/actions';


export const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <Genders />
      <Platforms />
      <Cards movies={movies} />
    </div>
  );
};