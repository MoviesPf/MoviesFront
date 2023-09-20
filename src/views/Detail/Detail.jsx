import {Container, Top, Header, ContainerModal, ContainerModalHeader, CloseButtonContainerDonate,
ContainerModalInfo, ContainerButtons, CancelButton, Submit, Modal, RightContainer, CloseButton, DonationContainer} from "./Detail.Styled";
import defaultBackground from "../../assets/defaultBackground.png";

import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { getProgramDetail, createReview, filterProgramsByGenre, getUserPlaylists} from '../../Redux/actions';
import { minutesToHoursAndMinutes } from '../../utils/minutesToHoursAndMinutes';

import { GreenLoading } from '../../Components/GreenLoading/GreenLoading';
import { ButtonOptionsFake } from './ButtonOptions/ButtonOptionsFake';
import { ProgramDetail } from './DetailData/ProgramDetail';
import { ButtonOptions } from './ButtonOptions/ButtonOptions';
import { NavBar } from '../../Components/NavBar/NavBar';
import { Footer } from '../../Components/Footer/Footer';
import { ReviewModal } from './ReviewModal/ReviewModal';
import { Advertisement } from '../../Components/Advertisement/Advertisement';

import moment from 'moment';

export const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { ProgramsId } = useParams();

  const user = JSON.parse(localStorage.getItem('userStorage'));
  const playlists = useSelector((state) => state.userPlaylists);
  const programDetail = useSelector((state) => state.programDetail);
  const similarPrograms = useSelector((state) => state.similarPrograms.data);
  const alreadyReviewed = !!programDetail.Reviews?.find((r) => r.UserId === user.id)
  
  
  useEffect(() => {
    dispatch(getProgramDetail(ProgramsId))
    .then( user.id ? dispatch(getUserPlaylists(user.id)) : null)
    .then(() => {
      setIdReal(true);
    });
  }, [dispatch, ProgramsId]);

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
        similarPrograms ? similarPrograms : []
      )
    );
    console.log(similarPrograms);
  }, [similarPrograms]);
      

  const [review, setReview] = useState({spoiler:false, rating:null, comments:null, date:moment().format('YYYY-MM-DD')});
  const [peliculaSimilar, setPeliculaSimilar] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showDonation, setShowDonation] = useState(false);
  const [showError, setShowError] = useState(false);
  const [idReal, setIdReal] = useState(false);
  const [commentError, setCommentError] = useState(false);

  const releaseDate = programDetail.release_date;
  const year = new Date(releaseDate).getFullYear();
  let runtimeFormatted = 'N/A';

  if (programDetail.type === 'movie' && !isNaN(programDetail.runtime)) {
    const runtimeInMinutes = programDetail.runtime;
    runtimeFormatted = minutesToHoursAndMinutes(runtimeInMinutes);
  } else {
    runtimeFormatted = `${programDetail.seasons} Seasons ${programDetail.episodes} Episodes`;
  }

  const handleCreate = async (event) => {
    event.preventDefault();

    const isValidRating = review.rating !== null && review.rating > 0;
    const isValidComments =
      review.comments &&
      review.comments.length >= 10 &&
      review.comments.length <= 3500;

    if (user.id && isValidComments) {
      if (isValidRating) {
        handleCloseModal();
        await dispatch(createReview(review, user.id, programDetail.id));
        dispatch(getProgramDetail(ProgramsId));
        setReview({ ...review, comments: '' });
      } else {
        setShowError(true);
      }
    } else {
      setShowError(!isValidRating);
      setCommentError(!(review.comments && review.comments.length >= 10));
    }
  };

  const handleCloseModal = () => {
    setCommentError(false);
    setShowModal(false);
    setReview({ ...review, rating: 0, spoiler: false, comments: '' });
    setShowDonation(true);
  };

  const handleMovieClick = (ProgramsId) => {
    navigate(`/detail/${ProgramsId}`);
  };

  const handleDonate = () => {
    setShowDonation(false);
    navigate('/donate');
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

  return (
    <div className={style.Container}>
      <NavBar />
        <Header backgroundurl={`url(${imageBack})`} />
        { 
          !idReal ?
          <GreenLoading/>
          :
          <Top>
            <ProgramDetail setIdReal={setIdReal} programDetail={programDetail} year={year} runtimeFormatted={runtimeFormatted}
             similarMovies={peliculaSimilar} handleMovieClick={handleMovieClick}/>
             {
              user.id && playlists.totalPlaylist ?
              <ButtonOptions 
              setShowModal={setShowModal}
              setShowError={setShowError}
              programId={programDetail.id}
              rating={rating}
              userId={user.id}
              playlistData={playlists}
              alreadyReviewed={alreadyReviewed}
              programDetailType={programDetail.type}
              />
              : <ButtonOptionsFake/>
             }
          </Top>
        }
        {showModal && <ReviewModal handleCloseModal={handleCloseModal} year={year} showError={showError} setShowError={setShowError} handleCreate={handleCreate} setShowModal={setShowModal} programDetail={programDetail} review={review} setReview={setReview}/>}
        {showDonation &&
          <ContainerModal>
            <Modal>
              <ContainerModalHeader>
                <CloseButtonContainerDonate>
                  <CloseButton onClick={() => setShowDonation(false)}> x </CloseButton>
                </CloseButtonContainerDonate>              
              </ContainerModalHeader>
              <br/>
              <ContainerModalInfo>
                <Advertisement/>
              </ContainerModalInfo>
              <br/>
              <ContainerButtons>
                <CancelButton onClick={() => setShowDonation(false)}>Maybe Later</CancelButton>
                <Submit onClick={() => handleDonate()}>Donate</Submit >
              </ContainerButtons>
            </Modal>
          </ContainerModal>
        }
        <Footer />
    </Container>
  );
};
