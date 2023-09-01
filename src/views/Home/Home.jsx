import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavBar } from '../../Components/NavBar/NavBar';
import { Genders } from '../../Components/Genders/Genders';
import Platforms from '../../Components/Platforms/Platforms';
import { Cards } from '../../Components/Cards/Cards';
import { getAllPrograms } from '../../Redux/actions';


export const Home = () => {
  const dispatch = useDispatch();
  const programs = useSelector((state) => state.programs);

  useEffect(() => {
    dispatch(getAllPrograms());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <Genders />
      <Platforms />
      <Cards programs={programs} />
    </div>
  );
};