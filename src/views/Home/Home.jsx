import React from 'react';
import { useSelector } from 'react-redux';
import { NavBar } from '../../Components/NavBar/NavBar';
import Platforms from '../../Components/Platforms/Platforms';
import Genders from '../../Components/Genders/Genders';
import { Cards } from '../../Components/Cards/Cards';

const Home = () => {
  const filteredPrograms = useSelector((state) => state.filteredPrograms); // Asume que tienes un estado para las películas filtradas

  return (
    <div>
      <NavBar />
      <Genders />
      <Platforms />
      <Cards programs={filteredPrograms} />
    </div>
  );
};

export default Home;