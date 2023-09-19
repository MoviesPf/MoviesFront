import { ContainerLeft, SimilarTitle, SimilarMoviesList, MovieCard, ContainerMiddle, ContainerReviews, AreaC, ProgramCard} from "./ProgramDetail.Styled";

import { DetailReview } from "../DetailReview/DetailReview.jsx";
import { DetailCard } from './DetailCard'

import defaultImg from "../../../assets/defaultMovie.png"

export const ProgramDetail = (  {programDetail, year, runtimeFormatted, similarMovies, handleMovieClick}  ) => {
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
              <img src={s.poster === "https://image.tmdb.org/t/p/w500null" ? defaultImg : s.poster} alt={`Poster of ${s.title}`} onClick={() => handleMovieClick(s.id)} />
              <span>{s.title}</span>
            </MovieCard>
            ))
          ) : (
          <div></div>
          )}
        </SimilarMoviesList>
      </ContainerLeft>

      <ContainerMiddle>
        <DetailCard props={{programDetail, year, runtimeFormatted}}/>
        <ContainerReviews>
          {
            programDetail.Reviews 

            ? programDetail.Reviews.map((r)=> ( <DetailReview r={r}/>))
            
            : <div>
              <h1>No tiene reviews</h1>
            </div>
          }
        </ContainerReviews>
        </ContainerMiddle>
  </AreaC>
  )
}