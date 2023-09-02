import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavBar } from '../../Components/NavBar/NavBar';
import { Portrait } from '../../Components/Portrait/Portrait';
import { Genres } from '../../Components/Genres/Genres';
import Platforms from '../../Components/Platforms/Platforms';
import { Cards } from '../../Components/Cards/Cards';
import { getAllPrograms } from '../../Redux/actions';
import css from './Home.module.css';


export const Home = () => {
  const dispatch = useDispatch();
  const programs = useSelector((state) => state.programs);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("UseEffect")
    dispatch(getAllPrograms())
    .then(() => {
      setLoading(false);
    });
  }, [dispatch]);
  console.log("Home");
  return (
    <div className={css.background}>
      <NavBar />
      {loading? (
        <p></p>
      ):(
      <Portrait programs={programs} />
      )}
      <Genres />
      <br/>
      <Platforms />
      <br/>
      <h1 className={css.subTitle}>Latest Releases</h1>
      <Cards programs={programs} />
    </div>
  );
}; 