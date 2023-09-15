import {
  Header,
  ModalReview,
  CloseButton,
  Comments,
  Submit,
  ContainerModalReview,
  IconImg,
  CloseButtonContainer,
  ContainerModalImg,
  ModalImg,
  SpanError,
  StarsContainer,
  TitleModal,
  YearTitleModal,
  TitleModalContainer
} from './Detail.Styled';
import fullStar from '../../assets/Icons/icons8-star-100 green.png';
import emptyStar from '../../assets/Icons/icons8-star-52.png';
import defaultBackground from '../../assets/defaultBackground.png';
import css from './Detail.module.css';

import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import {
  getProgramDetail,
  createReview,
  filterProgramsByGenre,
  getUserPlaylists
} from '../../Redux/actions';
import { minutesToHoursAndMinutes } from '../../utils/minutesToHoursAndMinutes';

import { GreenLoading } from '../../Components/GreenLoading/GreenLoading';
import { ProgramDetailTopAreaC } from './ProgramDetailTopAreaC';
import { NavBar } from '../../Components/NavBar/NavBar';
import { Footer } from '../../Components/Footer/Footer';
import { ButtonOptionsFake } from './ButtonOptionsFake';
import { ButtonOptions } from './ButtonOptions';

import moment from 'moment';

export const Detail = () => {
  const user = JSON.parse(localStorage.getItem('userStorage'));

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { ProgramsId } = useParams();

  useEffect(() => {
    dispatch(getProgramDetail(ProgramsId))
      .then(dispatch(getUserPlaylists(user?.id)))
      .then(() => {
        setIdReal(true);
      });
  }, [dispatch, ProgramsId]);

  const playlists = useSelector((state) => state.userPlaylists);
  const programDetail = useSelector((state) => state.programDetail);
  const similarMovies = useSelector((state) => state.filteredPrograms.data);

  const [review, setReview] = useState({
    rating: null,
    comments: null,
    date: moment().format('YYYY-MM-DD')
  });
  const [peliculaSimilar, setPeliculaSimilar] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const [idReal, setIdReal] = useState(false);

  useEffect(() => {
    if (programDetail && programDetail.Genres && programDetail.Genres[0].name) {
      const genre = programDetail.Genres[0].name
        ? programDetail.Genres[0].name
        : '';
      if (genre !== '')
        dispatch(filterProgramsByGenre(genre, programDetail.type));
    }
  }, [dispatch, programDetail]);

  useEffect(() => {
    setPeliculaSimilar(
      encontrarPeliculaMasParecida(
        programDetail?.title,
        similarMovies ? similarMovies : []
      )
    );
  }, [similarMovies]);

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
    setReview({ ...review, comments: comments });
  };

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
      const s1 = new Set(titulo1.split(' '));
      const s2 = new Set(titulo2.split(' '));
      const intersection = new Set([...s1].filter((x) => s2.has(x)));
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
  const rating = Math.round(
    programDetail?.Reviews?.reduce(
      (total, review) => total + review.rating,
      0
    ) / programDetail.Reviews?.length
  );

  let imageBack =
    programDetail.backdrop === 'https://image.tmdb.org/t/p/w500null'
      ? defaultBackground
      : programDetail.backdrop;

  console.log(playlists);

  return (
    <div className={css.container}>
      <NavBar />
      <Header backgroundurl={`url(${imageBack})`} />
      {!idReal ? (
        <GreenLoading />
      ) : (
        <div className={css.top}>
          <ProgramDetailTopAreaC
            programDetail={programDetail}
            year={year}
            runtimeFormatted={runtimeFormatted}
            similarMovies={peliculaSimilar}
            handleMovieClick={handleMovieClick}
          />
          {playlists.totalPlaylist ? (
            <ButtonOptions
              setShowModal={setShowModal}
              setShowError={setShowError}
              programId={programDetail.id}
              rating={rating}
              userId={user.id}
              playlistData={playlists}
            />
          ) : (
            <ButtonOptionsFake />
          )}
        </div>
      )}
      {showModal && (
        <ContainerModalReview>
          <ModalReview>
            <ContainerModalImg>
              <ModalImg src={programDetail.poster} alt='' />
              <TitleModalContainer>
                <TitleModal> {`${programDetail.title}`} </TitleModal>
                <YearTitleModal>{`(${year})`}</YearTitleModal>
              </TitleModalContainer>
              <CloseButtonContainer>
                <CloseButton
                  onClick={() => {
                    setShowModal(false);
                    setReview({ ...review, rating: 0 });
                  }}
                >
                  {' '}
                  x{' '}
                </CloseButton>
              </CloseButtonContainer>
            </ContainerModalImg>
            <Comments
              placeholder='Add a review...'
              onChange={(e) => handleComment(e.target.value)}
            />
            {showError && (
              <SpanError>must be logged in to add a review</SpanError>
            )}
            <StarsContainer>
              <div>
                {new Array(5).fill('').map((_, index) => (
                  <IconImg
                    key={index}
                    onMouseEnter={() => handleHoverRating(index + 1)}
                    onMouseLeave={() => handleHoverRating(0)}
                    onClick={() => handleRating(index + 1)}
                    src={
                      index < (hoverRating || review.rating)
                        ? fullStar
                        : emptyStar
                    }
                  />
                ))}
              </div>
              <Submit onClick={handleCreate}>Save</Submit>
            </StarsContainer>
          </ModalReview>
        </ContainerModalReview>
      )}
      <Footer />
    </div>
  );
};
