import css from './Home.module.css';
import { useEffect, useState } from 'react';
import { Cards } from '../../Components/Cards/Cards';
import { getAllPrograms } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Footer } from '../../Components/Footer/Footer';
import { NavBar } from '../../Components/NavBar/NavBar';
import { Filters } from '../../Components/Filters/Filters';
import { Carrusel } from '../../Components/Carrusel/Carrusel';
import { Portrait } from '../../Components/Portrait/Portrait';
import { GreenLoading } from '../../Components/GreenLoading/GreenLoading';
import BtnStart from '../../Components/Buttons/BtnStart';

export const Home = () => {
  const dispatch = useDispatch();
  const programs = useSelector((state) => state.programs);
  const filteredPrograms = useSelector((state) => state.filteredPrograms);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (programs.length === 0) {
      dispatch(getAllPrograms()).then(() => {
        setLoading(false);
      });
    }
  }, []);

  return (
    <div className={css.background}>
      <span id='start' />
      <NavBar />
      {programs.length === 0 ? (
        <GreenLoading />
      ) : (
        <div>
          <Portrait
            programs={
              filteredPrograms.data ? filteredPrograms.data : programs.data
            }
          />
          <Filters />
          <h1 className={css.subTitle1}>Latest Releases</h1>
          <Carrusel
            programs={
              filteredPrograms.data ? filteredPrograms.data : programs.data
            }
          />
          <div className={css.subTitle}> All Programs </div>
          <BtnStart />
          <Cards
            programs={
              filteredPrograms.data ? filteredPrograms.data : programs.data
            }
          />
          <Footer />
        </div>
      )}
    </div>
  );
};
