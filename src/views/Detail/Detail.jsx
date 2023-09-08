import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProgramDetail, createReview, filterProgramsByGenre } from '../../Redux/actions';
import { useParams, useNavigate } from 'react-router-dom';
import css from './Detail.module.css';
import { minutesToHoursAndMinutes } from '../../utils/minutesToHoursAndMinutes';
import { NavBar } from '../../Components/NavBar/NavBar';
import ProgramDetailTopAreaC from './ProgramDetailTopAreaC';
import { Header, ModalReview, CloseButton, Comments, Submit } from "./Detail.Styled";
import { Footer } from "../../Components/Footer/Footer"
import moment from 'moment';

export const Detail = () => {
  const { ProgramsId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const programDetail = useSelector((state) => state.programDetail);
  const similarMovies = useSelector((state) => state.filteredPrograms.data);
  const [showModal, setShowModal] = useState(false);
  const [review, setReview] = useState({rating:null, comments:null, date:moment().format('YYYY-MM-DD')});

  const randomElements = useMemo(() => {
    return similarMovies? Array.from({ length: 2 }, () => similarMovies[Math.floor(Math.random() * similarMovies.length)]) : []; 
  }, [similarMovies]);

  useEffect(() => {
    dispatch(getProgramDetail(ProgramsId));
    if (programDetail && programDetail.Genres) {
      const genre = programDetail.Genres[0].name;

      dispatch(filterProgramsByGenre(genre, programDetail.type));
    }
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
    await dispatch(createReview(review, 1, programDetail.id ));
    dispatch(getProgramDetail(ProgramsId));
    setShowModal(false);
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
        similarMovies={randomElements}
        handleMovieClick={handleMovieClick}
      />
      {showModal && 
        <ModalReview>
          <CloseButton onClick={() => setShowModal(false)}> X </CloseButton>
          <Comments onChange={(e) => handleComment(e.target.value)}/>
          {
            new Array(5).fill('').map((_, index) =>
            <span
              key={`key-${index}`}
              onClick={() => handleRating(index + 1)}
            >
              {review.rating > index ? '★' : '☆'}
            </span>)
          }
          <Submit onClick= {handleCreate} >Save</Submit >
        </ModalReview>}
      <Footer />
    </div>
  );
};


