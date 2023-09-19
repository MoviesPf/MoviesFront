import { ContainerLeft, SimilarMoviesList, MovieCard, SpanComments, StarsReviews, ReviewBy, YearTitleModal, ContainerMiddle, ContainerReviews, Reviews, 
  StarsContainer, AvatarImg, ContainerAvatarImg, AreaC, ProgramCard, SimilarTitle,ButtonFullComments, SpanSpoiler, DonationContainer} from "./ProgramDetail.Styled";
import { DetailCard } from './DetailCard'
import defaultImg from "../../../assets/defaultMovie.png"
import { Advertisement } from "../../../Components/Advertisement/Advertisement";
import emptyStar from "../../../assets/Icons/icons8-star-52.png"
import fullStar from "../../../assets/Icons/icons8-star-100 green.png"
import { useState } from "react";

export const ProgramDetail = (  {programDetail, year, runtimeFormatted, similarMovies, handleMovieClick}  ) => {
  let imageP =  programDetail.poster === "https://image.tmdb.org/t/p/w500null"  
  ? defaultImg
  : programDetail.poster
  
  const [showFullComments, setShowFullComments] = useState(false);

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
        <DonationContainer>
          <Advertisement/>
        </DonationContainer>
      </ContainerLeft>

      <ContainerMiddle>
        <DetailCard props={{programDetail, year, runtimeFormatted}}/>
        <ContainerReviews>
          {programDetail.Reviews && programDetail.Reviews.map((r)=> (
              <Reviews key={r.id}>
                <ContainerAvatarImg>
                  <div>
                  <AvatarImg src={r.User.avatar} alt="" />
                  <ReviewBy>{`Reveiwed by ${r.User.nickname}`}</ReviewBy>
                  </div>
                  {r.spoiler && <SpanSpoiler>Spoiler Alert!!</SpanSpoiler>}
                </ContainerAvatarImg>
                <SpanComments>
                  {showFullComments ? r.comments : r.comments.slice(0, 500)}
                  {r.comments.length > 500 && (
                    <ButtonFullComments onClick={() => setShowFullComments(!showFullComments)}>
                      {showFullComments ? "Read less" : "Read more"}
                    </ButtonFullComments>
                  )}
                </SpanComments>
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