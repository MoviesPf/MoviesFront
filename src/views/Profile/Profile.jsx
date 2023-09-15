import defaultBackground from "../../assets/background.jpg";
import styled from 'styled-components';

import { getUserPlaylists, getUserReviews } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { GreenLoading } from '../../Components/GreenLoading/GreenLoading';
import { ReviewContainer } from "../Profile/ReviewContainer";
import { Footer } from '../../Components/Footer/Footer';
import { NavBar }from "../../Components/NavBar/NavBar";
import { CardFake } from "./CardFake/CardFake.jsx";
import { Card } from '../../Components/Card/Card';
import { NavProfile } from './NavProfile';
import { UserData } from "./UserData";

const ViewContainer = styled.div`
  position: absolute;
  background-color: #000;
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: nowrap;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;
  scroll-behavior: smooth;
  
  &::-webkit-scrollbar {
    width: 10px;
  }
  
  &::-webkit-scrollbar-thumb{
    background: green;
  }
`

const UserBackground = styled.img`
  width: 100%;
  height: 40vh;
  object-fit: cover;
  position: relative;
  z-index: 1;
`
const AreaContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`

const IconLabel = styled.label`
  color: white;
  font-size: 26px;
  position: relative;
`

const LineHR = styled.hr`
  border: 0;
  height: 2px;
  margin-top: 0;
  margin-bottom: 0;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgb(0, 128, 0),
    rgba(0, 0, 0, 0)
  );
`

const LineSubHR = styled.hr`
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgb(0, 128, 0);
`

const LineNavHR = styled.hr`
  margin-top: 0;
  margin-bottom: 0;
  border: 0;
  height: 22px;
  box-shadow: inset 0 22px 30px -29px rgb(0, 128, 0);
`


const BodyContainer = styled.div`
  width: 100%;
  height: auto; // Esto haco que la altura cubra toda la pantalla
  display: flex;
  position: relative;
  flex-direction: column;
  padding-right: 5%;
  padding-left: 5%;
  margin-top: 2%;
`

const CardsContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-wrap: wrap;
padding-top: 1em;
align-items: center;
justify-content:start;
`

const AllCardsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 1em;
  justify-content:center;
`

const EmptyMessage = styled.h1`
  margin: 30px;
`

const ButtonMas = styled.button`
  border-radius: 5px;
  border: none;
  padding: 4px;
  font-size: 16px;
  cursor: pointer;
  color: #ffffff;
  background: transparent;
  transition: all 0.3s;
  margin-left: .3rem;

  &:hover {
  background-color: #464646;
  }
`
const TitleAndButton = styled.div`
  display: flex;
  justify-content: space-between;
`

const Profile = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("userStorage"))

  const [loading, setLoading] = useState(true);
  const [ menu, setMenu ] = useState("Profile")

  useEffect(() => {
    dispatch(getUserPlaylists(user.id)).then(()=> dispatch(getUserReviews(user.id))).then(()=> {setLoading(false)}).then(console.log(loading))
  },[dispatch]);
  
  const playlistData = useSelector((state) => state.userPlaylists);
  const reviewsData = useSelector((state) => state.userReviews);
  console.log(playlistData)
  console.log(reviewsData)

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
        <UserBackground src={user.background ? user.background : defaultBackground}/>

        <AreaContainer>
          <UserData avatar={user.avatar} name={user.name} nickname ={user.nickname} status={user.status ? user.status : "Movies Fan!!"}/>
          <NavProfile menu={menu} setMenu={setMenu} favorites={favorites} watchlist={watchlist} watched={watched}/>
            
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
    <Footer/>
    </ViewContainer>
  );
};

export default Profile;