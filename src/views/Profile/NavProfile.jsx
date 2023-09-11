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
justify-content: center;
width: 100%;
`
// #131212
const LinksContainer = styled.div`
display: flex;
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

cursor: pointer; 
  &:hover {
    color: rgb(25, 213, 118);
    background: #1C1C1C; 
  }
`

const IconsC = styled.div`
display: flex;
margin-left: 200px
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

  );
};

export default NavProfile;

