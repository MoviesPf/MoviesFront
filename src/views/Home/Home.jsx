import css from './Home.module.css';
import { useEffect, useState } from 'react';
import { Cards } from '../../Components/Cards/Cards'
import { getAllPrograms } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Footer } from '../../Components/Footer/Footer';
import { NavBar } from '../../Components/NavBar/NavBar';
import { Filters } from '../../Components/Filters/Filters';
import { Carrusel } from '../../Components/Carrusel/Carrusel';
import { Portrait } from '../../Components/Portrait/Portrait';
import { LoadingG } from '../../Components/LoadingG/LoadingG';

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
      <NavBar/>
      {
        loading 
        ? <LoadingG/>
        : <Portrait programs={programs} />
      }
      <Filters/>
      <h1 className={css.subTitle}>Latest Releases</h1>
      {
        loading 
        ? <LoadingG/>
        : <Carrusel programs={filteredPrograms.length ? filteredPrograms : programs.data} />
      }
      <h1 className={css.subTitle}> All Programs </h1>
      {
        loading
        ? <LoadingG/>
        : <Cards programs={filteredPrograms.length ? filteredPrograms : programs.data}/>
      }  
      <Footer/>
    </div>
  );
};
