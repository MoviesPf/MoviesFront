import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavBar } from '../../Components/NavBar/NavBar';
// import { Genders } from '../../Components/Genders/Genders';
// import Platforms from '../../Components/Platforms/Platforms';
import { Cards } from '../../Components/Cards/Cards';
import Footer from '../../Components/Footer/Footer';
import { getAllPrograms } from '../../Redux/actions';
import css from './Home.module.css';
import Filters from '../../Filters/Filters';
import { Portrait } from '../../Components/Portrait/Portrait'

export const Home = () => {
  const dispatch = useDispatch();
  const programs = useSelector((state) => state.programs);
  const filteredPrograms = useSelector((state) => state.filteredPrograms);
  console.log('filteredPrograms', filteredPrograms)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getAllPrograms())
      .then(() => {
        setLoading(false);
      });
  }, [dispatch]);


  return (
    <div className={css.background}>
      <NavBar />
      {loading ? (
        <p></p>
      ) : (
        <Portrait programs={programs} />
      )}
      <Filters /> {/* Agrega el componente Filters aquí */}
      {/* <Genres />
      <br/>
      <Platforms />*/}
      <br />
      <h1 className={css.subTitle}>Latest Releases</h1>
      {loading ? (
        <p></p>
      ) : (
        <Cards programs={filteredPrograms.length ? filteredPrograms : programs.data} />
      )}
      <br />
      <Footer />
    </div>
  );
};

export default Home;
