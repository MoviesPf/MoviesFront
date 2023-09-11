import React, { useEffect, useState } from 'react';
import NavProfile from './NavProfile'
import styled from 'styled-components'
import PresentationLine from "./PresentationLine"
import { NavBar }from "../../Components/NavBar/NavBar"
import ProgCardDetail from "../Profile/ProgCardDetail"
import { Card } from '../../Components/Card/Card'
import { useDispatch, useSelector } from 'react-redux';
import defaultBackground from "../../assets/background.jpg"
import { getUserPlaylists } from '../../Redux/actions';
import { CardFake } from "./CardFake/CardFake.jsx";
import { GreenLoading } from '../../Components/GreenLoading/GreenLoading';

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
`;

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

const ElementsBarr = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
`

const IconLabel = styled.label`
  color: white;
  font-size: 26px;
  position: relative;
`;

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
`;

const LineSubHR = styled.hr`
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgb(0, 128, 0);
`;

const LineNavHR = styled.hr`
  margin-top: 0;
  margin-bottom: 0;
  border: 0;
  height: 22px;
  box-shadow: inset 0 22px 30px -29px rgb(0, 128, 0);
`;


const BodyContainer = styled.div`
  width: 100%;
  height: auto; // Esto haco que la altura cubra toda la pantalla
  display: flex;
  position: relative;
  flex-direction: column;
  padding-right: 5%;
  padding-left: 5%;
  margin-top: 2%;
`;

const CardsContainer = styled.div`
width: 100%;
height: 100%;
padding-top: 1em;
display: flex;
flex-wrap: wrap;
justify-content:start;
align-items: center;
`;

const AllCardsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
`;

const EmptyMessage = styled.h1`
  margin: 30px;
`;

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
  const user = useSelector((state) => state.user);
  const playlistData = useSelector((state) => state.userPlaylists);
  const [loading, setLoading] = useState(true);
  const [ menu, setMenu ] = useState("Profile")
  const temporalOverview = "An intelligence operative for a shadowy global peacekeeping agency races to stop a hacker from stealing its most valuable — and dangerous — weapon."

  useEffect(() => {
    dispatch(getUserPlaylists(user.id)).then(()=> {setLoading(false)})
  },[dispatch]);
  
  console.log(playlistData)

  const setFavorites = ()=> {
    setMenu("Favorites")
  }

  const setWached = ()=> {
    setMenu("Watched")
  }

  const setWatchlist = ()=> {
    setMenu("Watchlist")
  }
  
  const playlists = playlistData.finalPlaylists;
  const favorites = playlists ? playlists.filter(playlist => playlist.name === "Favorites")[0] : [];
  const watchlist = playlists ? playlists.filter(playlist => playlist.name === "WatchList")[0] : [];
  const watched = playlists ? playlists.filter(playlist => playlist.name === "Watched")[0] : [];

  return (
    <ViewContainer>
      <NavBar/>
      {loading ? (
        <GreenLoading />
      ) : (
        <div>
          <UserBackground src={user.background ? user.background : defaultBackground}/>
          <LineNavHR/>

          <AreaContainer>
          
            <ElementsBarr>
              <PresentationLine avatar={user.avatar} name={user.name} nickname ={user.nickname} status={user.status ? user.status : "Movies Fan!!"}/>
                <NavProfile menu={menu} setMenu={setMenu} favorites={favorites} watchlist={watchlist} watched={watched}/>
            </ElementsBarr>
            
          <div>
          <LineNavHR/>
          <BodyContainer>
            {
              menu === "Profile" ?
              <div>
                <IconLabel>Reviews</IconLabel>
                <LineHR />
                <ProgCardDetail year={2023} genreA={'Ci-fi'} genreB={'Action'} overview={temporalOverview} starVal={5}/>
                <LineSubHR />
                <ProgCardDetail year={2023} genreA={'Ci-fi'} genreB={'Action'} overview={temporalOverview} starVal={5}/>
                {
                  playlists.map((playlist)=> (
                    <div>
                      <LineHR />
                      <TitleAndButton> 
                      <IconLabel>{playlist.name}</IconLabel>
                      {
                        playlist.programs.length > 5 
                        && <ButtonMas onClick={playlist.name === "Favorites" ? setFavorites : playlist.name === "Watched" ? setWached : playlist.name === "WatchList" ? setWatchlist : null}>Ver Todos</ButtonMas>
                      }
                      </TitleAndButton>
                      <LineHR />
                      {
                        playlist.programs.length 
                        ?
                        <CardsContainer>
                          {
                            playlist.programs.slice(0,6).map((program)=> (
                              <Card program={program}></Card>
                              ))
                          }

                        </CardsContainer>
                        :
                        <CardsContainer>
                          <CardFake/>
                          <EmptyMessage>This list is empty</EmptyMessage>
                        </CardsContainer>
                      }
                    </div>
                  ))
                }
              </div>
              
              : menu === "Reviews" ?
              <div>
                <IconLabel>All Reviews</IconLabel>
                <LineHR />
                <ProgCardDetail year={2023} genreA={'Ci-fi'} genreB={'Action'} overview={temporalOverview} starVal={5}/>
                <LineSubHR />
                <ProgCardDetail year={2023} genreA={'Ci-fi'} genreB={'Action'} overview={temporalOverview} starVal={5}/>
              </div>

              : menu === "Favorites" ?
              <div>
                <IconLabel>All {favorites.name}</IconLabel>
                <LineHR />
                {
                  favorites.programs.length 
                  ?
                  <AllCardsContainer>
                    {favorites.programs.map((program)=> (<Card program={program}></Card>))}
                  </AllCardsContainer>
                  :
                  <CardsContainer>
                    <CardFake/>
                    <EmptyMessage>This list is empty</EmptyMessage>
                  </CardsContainer>
                }
              </div>

              : menu === "Watched" ?
              <div>
                <IconLabel>All {watched.name}</IconLabel>
                <LineHR />
                {
                  watched.programs.length 
                  ?
                  <AllCardsContainer>
                    {watched.programs.map((program)=> (<Card program={program}></Card>))}
                  </AllCardsContainer>
                  :
                  <CardsContainer>
                    <CardFake/>
                    <EmptyMessage>This list is empty</EmptyMessage>
                  </CardsContainer>
                }
              </div>
              : 
              <div>
                <IconLabel>All {watchlist.name}</IconLabel>
                <LineHR />
                {
                  watchlist.programs.length 
                  ?
                  <AllCardsContainer>
                    {watchlist.programs.map((program)=> (<Card program={program}></Card>))}
                  </AllCardsContainer>
                  :
                  <CardsContainer>
                    <CardFake/>
                    <EmptyMessage>This list is empty</EmptyMessage>
                  </CardsContainer>
                }
              </div>
            }
              <LineHR />
          </BodyContainer>
        </div>
      </AreaContainer>
      </div>
    )}
    </ViewContainer>
  );
};

export default Profile;