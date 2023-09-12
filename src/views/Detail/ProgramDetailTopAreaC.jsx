import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux';


import defaultImg from "../../assets/defaultMovie.png"
import ProgCardDetail from './DetailCard'
import LogUserProgramOptions from './LogUserProgramOptions'

import emptyStar from "../../assets/Icons/icons8-star-52.png"
import fullStar from "../../assets/Icons/icons8-star-100 green.png"

import { ContainerLeft, SimilarMoviesList, MovieCard, SpanComments, StarsReviews, ReviewBy, YearTitleModal, ContainerMiddle, ContainerReviews, Reviews, StarsContainer, AvatarImg, ContainerAvatarImg, AreaC, ProgramCard, SimilarTitle } from "./Detail.Styled";


const ProgramDetailTopAreaC = (  {programDetail, year, runtimeFormatted, similarMovies, handleMovieClick, GreenLoading}  ) => {
  let imageP =  programDetail.poster === "https://image.tmdb.org/t/p/w500null"  
  ? defaultImg
  : programDetail.poster
  
  const handleMovieImageClick = (ProgramsId) => {
    handleMovieClick(ProgramsId);
  };

  return (
    <AreaC>
      <ContainerLeft>
        <ProgramCard src={imageP}/>
        <SimilarTitle> {`Similar ${programDetail.type}s`} </SimilarTitle>
        <SimilarMoviesList>
          {similarMovies && similarMovies.length > 0 ? (
            similarMovies.map((s)=> (
            <MovieCard key={s.id} onClick={() => handleMovieImageClick(s.id)}>
              <img src={s.poster} alt={`Poster of ${s.title}`} onClick={() => handleMovieClick(s.id)} />
              <span>{s.title}</span>
            </MovieCard>
            ))
          ) : (
          <GreenLoading/>
          )}
        </SimilarMoviesList>
      </ContainerLeft>

      <ContainerMiddle>
        <ProgCardDetail props={{programDetail, year, runtimeFormatted}}/>
        <ContainerReviews>
          {programDetail.Reviews && programDetail.Reviews.map((r)=> (
              <Reviews key={r.id}>
                <ContainerAvatarImg>
                  <AvatarImg src={r.User.avatar} alt="" />
                  <ReviewBy>{`Reveiwed by ${r.User.nickname}`}</ReviewBy>
                </ContainerAvatarImg>
                <SpanComments>{r.comments}</SpanComments>
                <StarsContainer>
                <span>
                  {new Array(5).fill('').map((_, index) => (
                    <StarsReviews
                      key={`key-${index}`}
                      onClick={() => handleRating(index + 1)}
                      src={r.rating > index ? fullStar : emptyStar}
                      alt={r.rating > index ? '★' : '☆'}
                    />
                  ))}
                </span>
                <YearTitleModal>{`(${r.date})`}</YearTitleModal>
                </StarsContainer>
              </Reviews>
            ))}
        </ContainerReviews>
        </ContainerMiddle>

    </AreaC>
  )
}

export default ProgramDetailTopAreaC;