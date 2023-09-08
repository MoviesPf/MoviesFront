import React from 'react'
import styled from 'styled-components'

import defaultImg from "../../assets/defaultMovie.png"
import ProgCardDetail from './DetailCard'
import LogUserProgramOptions from './LogUserProgramOptions'

import { ContainerLeft, SimilarMoviesList, MovieCard, ContainerMiddle, ContainerReviews, Reviews } from "./Detail.Styled";

const AreaC = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: nowrap;
  margin-top: 200px;
  width: 100%;
  height: 100%;
  justify-content: space-around;
`

const ProgramCard = styled.img`
width: 340px;
height: 480px;
margin-bottom: 20px;
border-radius: 30px;
z-index: 2;
`


const ProgramDetailTopAreaC = (  {programDetail, year, runtimeFormatted, setShowModal, similarMovies, handleMovieClick}  ) => {

  let imageP =  programDetail.poster === "https://image.tmdb.org/t/p/w500null"  
  ? defaultImg
  : programDetail.poster
  
  const handleMovieImageClick = (ProgramsId) => {
    handleMovieClick(ProgramsId);
  };

  return (
    <AreaC>

        <ContainerLeft>
          {/* La imagen */}
          <ProgramCard src={imageP}/>
          <SimilarMoviesList>
            {similarMovies && similarMovies.map((s)=> (
              <MovieCard key={s.id} onClick={() => handleMovieImageClick(s.id)}>
                <img
                  src={s.poster}
                  alt={`Poster of ${s.title}`}
                  onClick={() => handleMovieClick(s.id)} 
                />
                <span>{s.title}</span>
              </MovieCard>
            ))}
          </SimilarMoviesList>
        </ContainerLeft>
        <ContainerMiddle>

        {/* El componente de datos */}
        <ProgCardDetail props={{programDetail, year, runtimeFormatted}}/>

        <ContainerReviews>
          {programDetail.Reviews && programDetail.Reviews.map((r)=> (
              <Reviews key={r.id}>
                <span>{r.rating}</span>
                <span>{r.comments}</span>
              </Reviews>
            ))}
        </ContainerReviews>
        </ContainerMiddle>

        {/* El componente de opciones */}
        <LogUserProgramOptions setShowModal={setShowModal}/>        

    </AreaC>
  )
}

export default ProgramDetailTopAreaC;