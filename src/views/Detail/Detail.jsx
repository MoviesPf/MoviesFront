import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProgramDetail } from '../../Redux/actions';
import { useParams } from 'react-router-dom';
import css from './Detail.module.css';
import { minutesToHoursAndMinutes } from '../../utils/minutesToHoursAndMinutes';
import { NavBar } from '../../Components/NavBar/NavBar';
import ProgramDetailTopAreaC from './ProgramDetailTopAreaC';
import { Header } from "./Detail.Styled";
import Footer from "../../Components/Footer/Footer"

export const Detail = () => {
  const { ProgramsId } = useParams();
  const dispatch = useDispatch();
  const programDetail = useSelector((state) => state.programDetail);

  useEffect(() => {
    dispatch(getProgramDetail(ProgramsId));
  }, [dispatch, ProgramsId]);

  if (!programDetail) {
    return <div>Loading...</div>;
  }

  const releaseDate = programDetail.release_date;
  const year = new Date(releaseDate).getFullYear();

  let runtimeFormatted = 'N/A';

  if (programDetail.type === 'movie' && !isNaN(programDetail.runtime)) {
    const runtimeInMinutes = programDetail.runtime;
    runtimeFormatted = minutesToHoursAndMinutes(runtimeInMinutes);
  } else {
    runtimeFormatted = `${programDetail.seasons} Seasons ${programDetail.episodes} Episodes`;
  }

  return (
    <div className={css.container}>
      <NavBar />
      <Header backgroundurl={`url(${programDetail.backdrop})`} />
      <ProgramDetailTopAreaC programDetail={programDetail} year={year} runtimeFormatted={runtimeFormatted} />
      <Footer />
    </div>
  );
};


