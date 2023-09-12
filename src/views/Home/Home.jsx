import css from './Home.module.css';
import { useEffect, useState } from 'react';
import { Cards } from '../../Components/Cards/Cards';
import { getAllPrograms, getUserPlaylists } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Footer } from '../../Components/Footer/Footer';
import { NavBar } from '../../Components/NavBar/NavBar';
import { Filters } from '../../Components/Filters/Filters';
import { Carrusel } from '../../Components/Carrusel/Carrusel';
import { Portrait } from '../../Components/Portrait/Portrait';
import { GreenLoading } from '../../Components/GreenLoading/GreenLoading';
import BtnStart from '../../Components/Buttons/BtnStart';
import styled from 'styled-components'

const LineHR = styled.hr`
  border: 0;
  height: 2px;
  margin-top: 0;
  margin-bottom: 0;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgb(0, 128, 0),
    rgba(0, 0, 0, 0)
  );
`;

export const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector( (state)=> state.user)
  const programs = useSelector((state) => state.programs);
  const filteredPrograms = useSelector((state) => state.filteredPrograms);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (programs.length === 0){
      dispatch(getAllPrograms()).then(dispatch(getUserPlaylists(user.id))).then(() => {setLoading(false)});
    }
  },[dispatch]);

  return (
    <div className={css.background}>
      <span id='start' />
      <NavBar />
      {programs.length === 0 ? (
        <GreenLoading />
      ) : (
        <div className={css.content}>
          <Portrait programs={filteredPrograms.data ? filteredPrograms.data : programs.data}/>
          <Filters />
          <h1 className={css.subTitle}>Latest Releases</h1>
          <Carrusel
            programs={
              filteredPrograms.data ? filteredPrograms.data : programs.data
            }
          />
          <div id='programs' className={css.subTitle}> All Programs </div>
          <BtnStart />
          <Cards
            programs={
              filteredPrograms.data ? filteredPrograms.data : programs.data
            }
            total={
              filteredPrograms.data ? filteredPrograms.total : programs.total
            }
          />
          <Footer />
        </div>
      )}
    </div>
  );
};
