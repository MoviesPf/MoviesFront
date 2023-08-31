import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavBar } from '../../Components/NavBar/NavBar';
import { Portrait } from '../../Components/Portrait/Portrait';
import { Genres } from '../../Components/Genres/Genres';
import Platforms from '../../Components/Platforms/Platforms';
import { Cards } from '../../Components/Cards/Cards';
import { getAllPrograms } from '../../Redux/actions';
import css from './Home.module.css';
import { getAllPrograms } from '../../Redux/actions';


export const Home = () => {
  const dispatch = useDispatch();
  const programs = useSelector((state) => state.programs);

  useEffect(() => {
    dispatch(getAllPrograms());
  }, [dispatch]);

  return (
    <div className={css.background}>
      <NavBar />
      <Portrait movies={movies}/>
      <Genres />
      <Platforms />
      <h1 className={css.subTitle}>Latest Releases</h1>
      <Cards programs={programs} />
    </div>
  );
};