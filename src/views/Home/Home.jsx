import React from 'react';
import { useSelector } from 'react-redux';
import { NavBar } from '../../Components/NavBar/NavBar';
import Platforms from '../../Components/Platforms/Platforms';
import Genders from '../../Components/Genders/Genders';
import { Cards } from '../../Components/Cards/Cards';

const Home = () => {

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
      <Cards/>
    </div>
  );
};

export default Home;
