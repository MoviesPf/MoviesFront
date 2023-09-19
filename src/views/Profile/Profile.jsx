import { ViewContainer, UserBackground, AreaContainer, IconLabel, LineHR, LineSubHR, LineNavHR, BodyContainer, CardsContainer, AllCardsContainer, EmptyMessage, TitleAndButton, ButtonMas } from "./Profile.Styled"
import defaultBackground from "../../assets/background.jpg";

import { getUserPlaylists, getUserReviews } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useLocalStorage } from '../../utils/useLocalStorage';

import { GreenLoading } from '../../Components/GreenLoading/GreenLoading';
import { ReviewContainer } from "./ReviewContainer/ReviewContainer";
import { EditProfileModal } from "./EditProfileModal/EditProfileModal";
import { Footer } from '../../Components/Footer/Footer';
import { NavBar }from "../../Components/NavBar/NavBar";
import { CardFake } from "./CardFake/CardFake.jsx";
import { Card } from '../../Components/Card/Card';
import { NavProfile } from './NavProfile/NavProfile';
import { UserData } from "./UserData/UserData";
import Cloudinary from "./Cloudinary/Cloudinary";

const Profile = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("userStorage"))
  const userUpdated = useSelector((state) => state.user);
  const playlistData = useSelector((state) => state.userPlaylists);
  const reviewsData = useSelector((state) => state.userReviews);
  const [userStorage, setUserStorage] = useLocalStorage('userStorage', {});

  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [ menu, setMenu ] = useState("Profile")

  useEffect(() => {
    dispatch(getUserPlaylists(user.id)).then(()=> dispatch(getUserReviews(user.id))).then(()=> {setLoading(false)}).then(console.log(loading))
    if ( userUpdated.id ) setUserStorage(userUpdated)
  },[dispatch, userUpdated]);
  
  const setFavorites = ()=> {
    setMenu("Favorites")
  }

  const setWached = ()=> {
    setMenu("Watched")
  }

  const setWatchlist = ()=> {
    setMenu("Watchlist")
  }

  const setReviews = ()=> {
    setMenu("Reviews")
  }
  
  const playlists = playlistData.finalPlaylists;
  const reviews = reviewsData.reviewsAndPrograms;
  const favorites = playlists ? playlists.filter(playlist => playlist.name === "Favorites")[0] : [];
  const watchlist = playlists ? playlists.filter(playlist => playlist.name === "WatchList")[0] : [];
  const watched = playlists ? playlists.filter(playlist => playlist.name === "Watched")[0] : [];

  return (
    <ViewContainer>
      <NavBar/>
      { loading ? (
        <GreenLoading />
      ) : (
      <div>
        <UserBackground src={(user.background !== "default" || !user.background) ? user.background : defaultBackground}/>

        <AreaContainer>
          <UserData avatar={user.avatar} name={user.name} nickname ={user.nickname} status={user.status ? user.status : "Movies Fan!!"}/>
          <NavProfile setShowModal={setShowModal} menu={menu} setMenu={setMenu} favorites={favorites} watchlist={watchlist} watched={watched}/>
            
          <div>
            <LineNavHR/>
            <BodyContainer>
            {

            menu === "Profile" ?
            <div>
              <TitleAndButton>
                <IconLabel>Last Reviews</IconLabel>
                { reviews.length > 3 && <ButtonMas onClick={setReviews}>All Reviews</ButtonMas>}
              </TitleAndButton>
              <LineHR />
              { reviews.length ? 
              <div>
                { reviews.slice(-3).reverse().map((e)=> (
                  <div>
                    <ReviewContainer reviewDate={e.date} year={e.program.release_date.split("-")[0]} title={e.program.title} programId={e.program.id}genreA={e.program.Genres[0].name} genreB={e.program.Genres[1] ? e.program.Genres[1].name : ""} overview={e.comments} progImge={e.program.poster} starVal={e.rating}></ReviewContainer>
                    <LineSubHR />
                  </div>
                ))}
              </div>
              : 
              <div>
                <CardsContainer>
                  <CardFake/>
                  <EmptyMessage>Try to review some movies!!</EmptyMessage>
                </CardsContainer>
              </div>
              }
              { playlists.map((playlist)=> (
              <div>
                <TitleAndButton> 
                  <IconLabel>{playlist.name}</IconLabel>
                  { playlist.programs.length > 7 && <ButtonMas onClick={playlist.name === "Favorites" ? setFavorites : playlist.name === "Watched" ? setWached : playlist.name === "WatchList" ? setWatchlist : null}>See All</ButtonMas>}
                </TitleAndButton>
                <LineHR />
                { playlist.programs.length ?
                <div>
                  <CardsContainer>
                  { playlist.programs.slice(0,8).map((program)=> (<Card program={program}></Card>))}
                </CardsContainer>
                <LineSubHR />

                </div>
                : 
                <div>
                  <CardsContainer>
                    <CardFake/>
                    <EmptyMessage>This list is empty</EmptyMessage>
                  </CardsContainer>
                  <LineSubHR />
                </div>

                }
              </div>
              ))}
            </div>
            
            : menu === "Reviews" ?
            <div>
              <IconLabel>All Reviews</IconLabel>
              <LineHR />
              { reviews.length ? 
              <div>
                { reviews.reverse().map((e)=> (
                <div>
                  <ReviewContainer year={e.program.release_date.split("-")[0]} title={e.program.title} genreA={e.program.Genres[0].name} genreB={e.program.Genres[1] ? e.program.Genres[1].name : "uno"} overview={e.comments} progImge={e.program.poster} starVal={e.rating}></ReviewContainer>
                  <LineSubHR />
                </div>
                ))}
              </div>
              : 
              <div>
                <CardsContainer>
                  <CardFake/>
                  <EmptyMessage>Try to review some movies!!</EmptyMessage>
                </CardsContainer>
                <LineSubHR />
              </div>
              }
            </div>
            
            : menu === "Favorites" ?
            <div>
              <IconLabel>All {favorites.name}</IconLabel>
              <LineHR />
              { favorites.programs.length ?
              <div>
                <AllCardsContainer>
                {favorites.programs.map((program)=> (<Card program={program}></Card>))}
                </AllCardsContainer>
                <LineSubHR />
              </div>
              :
              <div>
                <CardsContainer>
                  <CardFake/>
                  <EmptyMessage>This list is empty</EmptyMessage>
                </CardsContainer>
                <LineSubHR />
              </div>
              }
            </div>

            : menu === "Watched" ?
            <div>
              <IconLabel>All {watched.name}</IconLabel>
              <LineHR />
              { watched.programs.length ? 
              <div>
                <AllCardsContainer>
                  {watched.programs.map((program)=> (<Card program={program}></Card>))}
                </AllCardsContainer>
                <LineSubHR />
              </div>
              :
              <div>
                <CardsContainer>
                  <CardFake/>
                  <EmptyMessage>This list is empty</EmptyMessage>
                </CardsContainer>
                <LineSubHR />
              </div>
              }
            </div>

            : 
            <div>
              <IconLabel>All {watchlist.name}</IconLabel>
              <LineHR />
              { watchlist.programs.length ?
              <div>
                <AllCardsContainer>
                  {watchlist.programs.map((program)=> (<Card program={program}></Card>))}
                </AllCardsContainer>
                <LineSubHR />
              </div>
              :
              <div>
                <CardsContainer>
                  <CardFake/>
                  <EmptyMessage>This list is empty</EmptyMessage>
                </CardsContainer>
                <LineSubHR />
              </div>
              }
            </div>
            }
            </BodyContainer>
          </div>
        </AreaContainer>
      </div>
      )}
      {
        showModal && <EditProfileModal setShowModal={setShowModal}/>
      }
    <Footer/>
    </ViewContainer>
  );
};

export default Profile;