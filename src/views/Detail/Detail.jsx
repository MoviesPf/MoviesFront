// import {Container, Top, Header} from "./Detail.Styled";
// import defaultBackground from "../../assets/defaultBackground.png";

// import { useParams, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';

// import {
//   getProgramDetail,
//   createReview,
//   filterProgramsByGenre,
//   getUserPlaylists
// } from '../../Redux/actions';
// import { minutesToHoursAndMinutes } from '../../utils/minutesToHoursAndMinutes';

// import { GreenLoading } from '../../Components/GreenLoading/GreenLoading';
// import { ButtonOptionsFake } from "./ButtonOptions/ButtonOptionsFake";
// import { ProgramDetail }  from './DetailData/ProgramDetail';
// import { ButtonOptions } from './ButtonOptions/ButtonOptions';
// import { NavBar } from '../../Components/NavBar/NavBar';
// import { Footer } from "../../Components/Footer/Footer";
// import { ReviewModal } from "./ReviewModal/ReviewModal";

// import moment from 'moment';

export const Detail = () => {}
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const {ProgramsId} = useParams();

//   const user = JSON.parse(localStorage.getItem("userStorage"));
//   const playlists = useSelector((state)=> state.userPlaylists);
//   const programDetail = useSelector((state) => state.programDetail);
//   const similarMovies = useSelector((state) => state.filteredPrograms.data);


//   useEffect(() => {
//     dispatch(getProgramDetail(ProgramsId))
//       .then(dispatch(getUserPlaylists(user?.id)))
//       .then(() => {
//         setIdReal(true);
//       });
//   }, [dispatch, ProgramsId]);

//   useEffect(() => {
//     if (programDetail && programDetail.Genres && programDetail.Genres[0].name) {
//       const genre = programDetail.Genres[0].name
//         ? programDetail.Genres[0].name
//         : '';
//       if (genre !== '')
//         dispatch(filterProgramsByGenre(genre, programDetail.type));
//     }
//   }, [dispatch, programDetail]);

//   useEffect(() => {
//     setPeliculaSimilar(
//       encontrarPeliculaMasParecida(
//         programDetail?.title,
//         similarMovies ? similarMovies : []
//       )
//     );
//   }, [similarMovies]);


//   const [review, setReview] = useState({rating:null, comments:null, date:moment().format('YYYY-MM-DD')});
//   const [peliculaSimilar, setPeliculaSimilar] = useState(0);
//   const [showModal, setShowModal] = useState(false);
//   const [idReal, setIdReal] = useState(false);

//   const releaseDate = programDetail.release_date;
//   const year = new Date(releaseDate).getFullYear();
//   let runtimeFormatted = 'N/A';

//   if (programDetail.type === 'movie' && !isNaN(programDetail.runtime)) {
//     const runtimeInMinutes = programDetail.runtime;
//     runtimeFormatted = minutesToHoursAndMinutes(runtimeInMinutes);
//   } else {
//     runtimeFormatted = `${programDetail.seasons} Seasons ${programDetail.episodes} Episodes`;
//   }

//   const handleCreate = async (event) => {
//     event.preventDefault();
//     setShowModal(false);
//     setReview({ ...review, rating: 0 });
//     await dispatch(createReview(review, user.id, programDetail.id));
//     dispatch(getProgramDetail(ProgramsId));
//     setReview([...review, review]);
//   };

//   const handleMovieClick = (ProgramsId) => {
//     navigate(`/detail/${ProgramsId}`);
//   };

//   function encontrarPeliculaMasParecida(tituloQueTienes, peliculas) {
//     function calcularSimilitud(titulo1, titulo2) {
//       const s1 = new Set(titulo1.split(' '));
//       const s2 = new Set(titulo2.split(' '));
//       const intersection = new Set([...s1].filter((x) => s2.has(x)));
//       const union = new Set([...s1, ...s2]);
//       const jaccardSimilitud = intersection.size / union.size;
//       return jaccardSimilitud;
//     }

//     peliculas.sort((pelicula1, pelicula2) => {
//       const similitud1 = calcularSimilitud(tituloQueTienes, pelicula1.title);
//       const similitud2 = calcularSimilitud(tituloQueTienes, pelicula2.title);
//       return similitud2 - similitud1;
//     });

//     const peliculasMasParecidas = peliculas.slice(1, 3);
//     return peliculasMasParecidas;
//   };

//   const rating = Math.round(programDetail?.Reviews?.reduce((total, review) => total + review.rating, 0) / programDetail.Reviews?.length);

//   let imageBack =
//     programDetail.backdrop === 'https://image.tmdb.org/t/p/w500null'
//       ? defaultBackground
//       : programDetail.backdrop;

//   return (
//     <Container>
//       <NavBar />
//         <Header backgroundurl={`url(${imageBack})`} />
//         { 
//           !idReal ?
//           <GreenLoading/>
//           :
//           <Top>
//             <ProgramDetail programDetail={programDetail} year={year} runtimeFormatted={runtimeFormatted}
//              similarMovies={peliculaSimilar} handleMovieClick={handleMovieClick}/>
//              {
//               user.id && playlists.totalPlaylist ?
//               <ButtonOptions setShowModal={setShowModal} programId={programDetail.id} rating={rating} userId={user.id} playlistData={playlists}/>
//               : <ButtonOptionsFake/>
//              }
//           </Top>
//         }
//         {showModal && <ReviewModal year={year} handleCreate={handleCreate}setShowModal={setShowModal} programDetail={programDetail} review={review} setReview={setReview}/>}
//         <Footer />
//     </Container>
//   );
// };
