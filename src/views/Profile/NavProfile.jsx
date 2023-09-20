import React from 'react';
import styled from 'styled-components'
import favIcon from "../../assets/Icons/icons8-love-90.png"
import ViewsIcon from "../../assets/Icons/icons8-view-90.png"
import PendingIcon from "../../assets/Icons/icons8-delivery-time-96.png"

const NavContainer = styled.div`
background-color: #131212;
padding-bottom: 10px;
padding-top: 10px;
display: flex;
justify-content: space-between;
padding-left: 6%;
width: 100%;
`
// #131212
const LinksContainer = styled.div`
display: flex;

@media (max-width: 768px) {
  flex-wrap: nowrap;
  overflow: scroll;
  }
justify-content: center;
align-items: center;
`

const ViewButton = styled.button`
width: 140px;
height: 50px;
border-radius: 200px;
background: transparent; 
border: 2px solid transparent;
color: white;
font-size: 25px;
font-weight: bold;
@media (max-width: 1000px) {
  height: 50px;
  width: 20%;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center
  }
@media (max-width: 768px) {
     flex: 1 0 auto;
     height: 50px;
    width: 100px; 
  }

cursor: pointer; 
  &:hover {
    color: #19d576;
    background: #1C1C1C; 
  }
`

const IconsC = styled.div`
display: flex;
padding-right: 10%;
padding-left: 5%;

`

const IconContainer = styled.div`
margin-right: 10px;
display: flex;
flex-wrap: nowrap;
flex-direction: column;
justify-content: center;
align-items: center;
`

const IconImg = styled.img`
width: 30px;
height: 30px;
`

const IconLabel = styled.label`
color: white;
font-size: 16px;
`

const NavProfile = ({menu, setMenu, favorites, watchlist, watched}) => {
  const screenWidth = window.innerWidth;

  const setProfile = ()=> {
    setMenu("Profile")
  }

  const setReviews = ()=> {
    setMenu("Reviews")
  }

  const setFavorites = ()=> {
    setMenu("Favorites")
  }

  const setWached = ()=> {
    setMenu("Watched")
  }

  const setWatchlist = ()=> {
    setMenu("Watchlist")
  }

  return (
    <div>
      
    <NavContainer>
      <LinksContainer>
          <ViewButton onClick={setProfile}>Profile</ViewButton>
          <ViewButton onClick={setReviews}>Reviews</ViewButton>
          <ViewButton onClick={setFavorites}>Favorites</ViewButton>
          <ViewButton onClick={setWached}>Watched</ViewButton>
          <ViewButton onClick={setWatchlist}>Watchlist</ViewButton>
      </LinksContainer>
      <IconsC>
        <IconContainer>
          <IconImg src={ViewsIcon}></IconImg>
          <IconLabel>{ watched ? watched.programs.length : 0}</IconLabel>
        </IconContainer>
        <IconContainer>
          <IconImg src={favIcon}></IconImg>
          <IconLabel>{ favorites ? favorites.programs.length : 0}</IconLabel>
        </IconContainer>
        <IconContainer>
          <IconImg src={PendingIcon}></IconImg>
          <IconLabel>{ watchlist ? watchlist.programs.length : 0}</IconLabel>
        </IconContainer>
      </IconsC>
    </NavContainer>
    </div>


  );
};

export default NavProfile;

