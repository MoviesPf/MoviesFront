import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProgramDetail, createReview, filterProgramsByGenre, getUserPlaylists } from '../../Redux/actions';
import { useParams, useNavigate } from 'react-router-dom';
import css from './Detail.module.css';
import { minutesToHoursAndMinutes } from '../../utils/minutesToHoursAndMinutes';
import { NavBar } from '../../Components/NavBar/NavBar';
import ProgramDetailTopAreaC from './ProgramDetailTopAreaC';
import { Header, ModalReview, CloseButton, Comments, Submit, ContainerModalReview, IconImg, CloseButtonContainer, ContainerModalImg, ModalImg, SpanError, StarsContainer, TitleModal, YearTitleModal, TitleModalContainer } from "./Detail.Styled";
import { Footer } from "../../Components/Footer/Footer"
import moment from 'moment';
import { GreenLoading } from '../../Components/GreenLoading/GreenLoading';
import emptyStar from "../../assets/Icons/icons8-star-52.png"
import fullStar from "../../assets/Icons/icons8-star-100 green.png"

export const Detail = () => {
  const { ProgramsId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const programDetail = useSelector((state) => state.programDetail);
  const user = useSelector((state) => state.user);
  const similarMovies = useSelector((state) => state.filteredPrograms.data);
  const [showModal, setShowModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const [review, setReview] = useState({rating:null, comments:null, date:moment().format('YYYY-MM-DD')});
  const [hoverRating, setHoverRating] = useState(0);
  const [peliculaSimilar, setPeliculaSimilar] = useState(0);

  useEffect(() => {
    dispatch(getUserPlaylists(user.id))
    dispatch(getProgramDetail(ProgramsId));
  }, [dispatch, ProgramsId]);

  useEffect(() => {
    if (programDetail && programDetail.Genres) {
      const genre = programDetail.Genres[0].name;

      dispatch(filterProgramsByGenre(genre, programDetail.type));
    }
  }, [dispatch, programDetail]);

  useEffect(() => {
    setPeliculaSimilar(encontrarPeliculaMasParecida(programDetail?.title, similarMovies ? similarMovies : []));
  }, [similarMovies]);

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

  const handleComment = (comments) => {
    setReview({...review, comments:comments})
  }

  const handleCreate = async (event) => {
    event.preventDefault();
    if (user.id) {
      setShowModal(false);
      setReview({ ...review, rating: 0 });
      await dispatch(createReview(review, user.id, programDetail.id));
      dispatch(getProgramDetail(ProgramsId));
      setReview([...review, review]);
    } else setShowError(true);
  };
  
  const handleMovieClick = (ProgramsId) => {
    navigate(`/detail/${ProgramsId}`); 
  };

  const handleHoverRating = (rating) => {
    setHoverRating(rating); 
  };

  const handleRating = (rating) => {
    setReview({ ...review, rating: rating }); 
  };

  function encontrarPeliculaMasParecida(tituloQueTienes, peliculas) {
    function calcularSimilitud(titulo1, titulo2) {
      const s1 = new Set(titulo1.split(" "));
      const s2 = new Set(titulo2.split(" "));
      const intersection = new Set([...s1].filter(x => s2.has(x)));
      const union = new Set([...s1, ...s2]);
      const jaccardSimilitud = intersection.size / union.size;
      return jaccardSimilitud;
  }

    peliculas.sort((pelicula1, pelicula2) => {
      const similitud1 = calcularSimilitud(tituloQueTienes, pelicula1.title);
      const similitud2 = calcularSimilitud(tituloQueTienes, pelicula2.title);
      return similitud2 - similitud1;
  });

  const peliculasMasParecidas = peliculas.slice(1, 3);
  
      return peliculasMasParecidas;
  }
  const rating = Math.round(programDetail?.Reviews?.reduce((total, review) => total + review.rating, 0) / programDetail.Reviews?.length);

  console.log(rating, "rating");

  return (
    <div className={css.container}>
      <NavBar />
      <Header backgroundurl={`url(${programDetail.backdrop})`} />
      <ProgramDetailTopAreaC 
        programDetail={programDetail} 
        year={year} 
        runtimeFormatted={runtimeFormatted} 
        setShowModal={setShowModal}
        setShowError={setShowError}
        similarMovies={peliculaSimilar}
        handleMovieClick={handleMovieClick}
        GreenLoading={GreenLoading}
        rating={rating}
      />
      {showModal && 
      <ContainerModalReview>
        <ModalReview>
          <ContainerModalImg>
            <ModalImg  src={programDetail.poster} alt="" />
            <TitleModalContainer>
              <TitleModal> {`${programDetail.title}`} </TitleModal> 
              <YearTitleModal>{`(${year})`}</YearTitleModal>
            </TitleModalContainer>
            <CloseButtonContainer>
              <CloseButton onClick={() => {setShowModal(false) 
                setReview({ ...review, rating: 0 }) }}> x </CloseButton>
            </CloseButtonContainer>
          </ContainerModalImg>
          <Comments placeholder='Add a review...' onChange={(e) => handleComment(e.target.value)}/>
          {showError && 
            <SpanError>must be logged in to add a review</SpanError>
          }
          <StarsContainer>
            <div>
              {new Array(5).fill('').map((_, index) => (
                <IconImg
                  key={index}
                  onMouseEnter={() => handleHoverRating(index + 1)}
                  onMouseLeave={() => handleHoverRating(0)}
                  onClick={() => handleRating(index + 1)}
                  src={index < (hoverRating || review.rating) ? fullStar : emptyStar} 
                />
              ))}
            </div>
            <Submit onClick= {handleCreate} >Save</Submit >
          </StarsContainer>
        </ModalReview>
        </ContainerModalReview>
      }
      <Footer />
    </div>
  );
};


