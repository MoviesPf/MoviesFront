import { GreenLoading } from '../../Components/GreenLoading/GreenLoading';
import { Portrait } from '../../Components/Portrait/Portrait';
import { Carrusel } from '../../Components/Carrusel/Carrusel';
import { BtnStart } from '../../Components/Buttons/BtnStart';
import { Filters } from '../../Components/Filters/Filters';
import { NavBar } from '../../Components/NavBar/NavBar';
import { Footer } from '../../Components/Footer/Footer';
import { Cards } from '../../Components/Cards/Cards';

import { getAllPrograms, getUserPlaylists} from '../../Redux/actions';
import { useLocalStorage } from '../../utils/useLocalStorage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


import styled from 'styled-components'
import css from './Home.module.css';

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
  const userInState = useSelector( (state)=> state.user)
  const user = JSON.parse(localStorage.getItem("userStorage"))

  const programs = useSelector((state) => state.programs);
  const filteredPrograms = useSelector((state) => state.filteredPrograms);

  console.log(user)
  
  const [userStorage, setUserStorage] = useLocalStorage("userStorage", {} );
  
  useEffect(() => {
    if (programs.length === 0){ dispatch(getAllPrograms()) }
  },[dispatch]);
  
  useEffect(()=> {
    if (userInState.id) setUserStorage(userInState)
    user.id ? dispatch(getUserPlaylists(user.id)) : null
  },[])

  return (
    <div className={css.background}>
      <span id='start' />
      <NavBar />
      {programs.length === 0 ? (
        <GreenLoading />
      ) : (
        <div className={css.content}>

          <Portrait programs={filteredPrograms.data ? filteredPrograms.data : programs.data}/>
          <Filters/>

          <LineHR/>
          <h1 className={css.subTitle}>Latest Releases</h1>
          <LineHR/>

          <Carrusel programs={ filteredPrograms.data ? filteredPrograms.data : programs.data}/>

          <LineHR/>
          <div className={css.subTitle}> All Programs </div>
          <LineHR/>

          <BtnStart/>
          <Cards programs={ filteredPrograms.data ? filteredPrograms.data : programs.data} total={filteredPrograms.data ? filteredPrograms.total : programs.total}/>    
        </div>
      )}
      <Footer/>
    </div>
  );
};
