import React from 'react'
import styled from 'styled-components'

import defaultImg from "../../assets/defaultMovie.png"
import ProgCardDetail from './DetailCard'
import LogUserProgramOptions from './LogUserProgramOptions'

import { ContainerLeft, SimilarMoviesList, MovieCard, ContainerMiddle, ContainerReviews, Reviews, StarsContainer, AvatarImg, ContainerAvatarImg, AreaC, ProgramCard } from "./Detail.Styled";


const ProgramDetailTopAreaC = (  {programDetail, year, runtimeFormatted, setShowModal, similarMovies, handleMovieClick, GreenLoading, setShowError}  ) => {

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
          <span> {`Similar ${programDetail.type}s`} </span>
          <SimilarMoviesList>
            {similarMovies && similarMovies.length > 0 ? (
              similarMovies.map((s)=> (
                <MovieCard key={s.id} onClick={() => handleMovieImageClick(s.id)}>
                  <img
                    src={s.poster}
                    alt={`Poster of ${s.title}`}
                    onClick={() => handleMovieClick(s.id)} 
                  />
                  <span>{s.title}</span>
                </MovieCard>
                ))
              ) : (
                <GreenLoading/>
              )}
          </SimilarMoviesList>

        </ContainerLeft>
        <ContainerMiddle>

        {/* El componente de datos */}
        <ProgCardDetail props={{programDetail, year, runtimeFormatted}}/>

        <ContainerReviews>
          {programDetail.Reviews && programDetail.Reviews.map((r)=> (
              <Reviews key={r.id}>
                <ContainerAvatarImg>
                  <AvatarImg src={r.User.avatar} alt="" />
                  <span>{`Reveiwed by ${r.User.nickname}`}</span>
                </ContainerAvatarImg>
                <span>{r.comments}</span>
                <StarsContainer>
                  <span>
                    {
                      new Array(5).fill('').map((_, index) =>
                      <span
                        key={`key-${index}`}
                        onClick={() => handleRating(index + 1)}
                      >
                        {r.rating > index ? '★' : '☆'}
                      </span>)
                    }
                  </span>
                <span>{r.date}</span>
                </StarsContainer>
              </Reviews>
            ))}
        </ContainerReviews>
        </ContainerMiddle>

        {/* El componente de opciones */}
        <LogUserProgramOptions 
          setShowModal={setShowModal}
          setShowError={setShowError}
          programId={programDetail.id}
        />        

    </AreaC>
  )
}

export default ProgramDetailTopAreaC;