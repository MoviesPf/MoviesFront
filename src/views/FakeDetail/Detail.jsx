import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProgramDetail } from '../../Redux/actions';
import { useParams } from 'react-router-dom';
import css from './Detail.module.css';
import { minutesToHoursAndMinutes } from '../../utils/minutesToHoursAndMinutes';

import styled from 'styled-components'
import ProgramDetailTopAreaC from "../FakeDetail/ProgramDetailTopAreaC"
import defaultBGImg from "../../assets/programBG.png"


/* import DetailHeader from './DetailHeader'; 
import DetailContent from './DetailContent';  */

import NavBar from "../../Components/NavBar/NavBar"



const ViewContainer = styled.div`
 max-height:  100%; /* Establece una altura máxima */
  overflow-y: auto;
  background-color:  #1C1C1C;
  display: flex;
  position: fixed;
  top: 0; 
  left: 0; 
  width: 100%;
  height: 100%; 
  flex-wrap: nowrap;
  flex-direction: column;
`
const ProgramBackground = styled.img`
  width: 100%;
  height: 34vh;
  object-fit: cover;
  object-position: center top;
  position: absolute;
  z-index: 1;
`
const BodyContainer = styled.div`

  top: 0; 
  left: 0; 
  width: 100%;
  height: 100%; 
  display: flex;
  position: relative;
  flex-direction: column;
  margin-top: 360px;
`







const Detail = () => {

  let image =  defaultBGImg
 // if (programDetail.backdrop){image = programDetail.backdrop}




/*   const { ProgramsId } = useParams();
  const dispatch = useDispatch();
  const programDetail = useSelector((state) => state.programDetail);

  useEffect(() => {
    dispatch(getProgramDetail(ProgramsId));
  }, [dispatch, ProgramsId]);

  if (!programDetail) {
    return <div>Loading...</div>;
  }

  const limitedCast = programDetail.cast && programDetail.cast.length > 0 ? programDetail.cast.slice(0, 10) : [];

  const releaseDate = programDetail.release_date;
  const year = new Date(releaseDate).getFullYear();

  let runtimeFormatted = 'N/A';

  if (programDetail.type === 'movie' && !isNaN(programDetail.runtime)) {
    const runtimeInMinutes = programDetail.runtime;
    runtimeFormatted = minutesToHoursAndMinutes(runtimeInMinutes);
  } else {
    runtimeFormatted = 'N/A';
  } */


  return (
    <ViewContainer>
     
        {/* NavBar y background ⬇ */}
          <NavBar></NavBar>
        <ProgramBackground src={image}/>

          <BodyContainer>
          <ProgramDetailTopAreaC/>
          </BodyContainer>
    
    </ViewContainer>
  );



/* 

    <div className={css.container}>
      <NavBar />
      <div className={`${css.header}`} style={{ backgroundImage: `url(${programDetail.backdrop})` }}></div>



        <DetailHeader programDetail={programDetail} year={year} runtimeFormatted={runtimeFormatted} />
        <DetailContent programDetail={programDetail} limitedCast={limitedCast} /> 



    </div>
  ); */

};

export default Detail;
