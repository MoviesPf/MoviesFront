import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProgramDetail, createReview, filterProgramsByGenre } from '../../Redux/actions';
import { useParams, useNavigate } from 'react-router-dom';
import css from './Detail.module.css';
import { minutesToHoursAndMinutes } from '../../utils/minutesToHoursAndMinutes';
import { NavBar } from '../../Components/NavBar/NavBar';
import ProgramDetailTopAreaC from './ProgramDetailTopAreaC';
import { Header, ModalReview, CloseButton, Comments, Submit, IconImg, ContainerModalImg, ModalImg, SpanModalImg, SpanError, StarsContainer } from "./Detail.Styled";
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

  console.log(user, "user");

  const randomElements = useMemo(() => {
    return similarMovies && similarMovies.length > 0 ? Array.from({ length: 2 }, () => similarMovies[Math.floor(Math.random() * similarMovies.length)]) : []; 
  }, [similarMovies]);

  useEffect(() => {
    dispatch(getProgramDetail(ProgramsId));
  }, [dispatch, ProgramsId]);

  useEffect(() => {
    if (programDetail && programDetail.Genres) {
      const genre = programDetail.Genres[0].name;

      dispatch(filterProgramsByGenre(genre, programDetail.type));
    }
  }, [dispatch, programDetail]);

  useEffect(() => {
    
  }, [dispatch, programDetail.Reviews?.length]);

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

  const handleRating = (rating) => {
    setReview({...review, rating:rating})
  }

  const handleComment = (comments) => {
    setReview({...review, comments:comments})
  }

  const handleCreate = async () => {
    if (user.id) {
      await dispatch(createReview(review, user.id, programDetail.id ));
      dispatch(getProgramDetail(ProgramsId));
      setShowModal(false);
    } else setShowError(true);
  }

  const handleMovieClick = (ProgramsId) => {
    navigate(`/detail/${ProgramsId}`); 
  };

  console.log(similarMovies, "similarmovies");
  console.log(programDetail, "programDetail");

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
        similarMovies={randomElements}
        handleMovieClick={handleMovieClick}
        GreenLoading={GreenLoading}
      />
      {showModal && 
        <ModalReview>
          <ContainerModalImg>
            <ModalImg  src={programDetail.poster} alt="" />
            <SpanModalImg> {`${programDetail.title} (${year})`} </SpanModalImg>
          </ContainerModalImg>
          <CloseButton onClick={() => setShowModal(false)}> x </CloseButton>
          <Comments placeholder='Add a review...' onChange={(e) => handleComment(e.target.value)}/>
          {showError && 
            <SpanError>must be logged in to add a review</SpanError>
          }
          <StarsContainer>
            <div>
              {
                new Array(5).fill('').map((_, index) => <IconImg onClick={() => handleRating(index + 1)} src={review.rating > index ? fullStar : emptyStar } />)
              }
            </div>
            <Submit onClick= {handleCreate} >Save</Submit >
          </StarsContainer>
        </ModalReview>}
        <Footer />
    </div>
  );
};


