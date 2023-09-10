import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import favIcon from "../../assets/Icons/icons8-love-90.png"
import ViewsIcon from "../../assets/Icons/icons8-view-90.png"
import PendingIcon from "../../assets/Icons/icons8-delivery-time-96.png"


const NavContainer = styled.div`
background-color: #131212;
width: 100%;
padding-top: 10px;
padding-bottom: 10px;
display: flex;
justify-content: space-around;
position: relative;
z-index: 3;
`
const LinksContainer = styled.div`
background-color: #131212;
width: 100%;
display: flex;
justify-content: space-evenly;
position: relative;
align-items: center;
left: 42px;
margin-right: 460px;
z-index: 3;
`
const IconContainer = styled.div`
display: flex;
flex-wrap: nowrap;
flex-direction: column;
justify-content: center;
align-items: center;
margin-right: 10px;


`
const IconsC = styled.div`
width: 250px;
display: flex;
justify-content: space-evenly;
margin-right: 1.5rem;
gap: .5rem;

`
const IconImg = styled.img`
width: 30px;
height: 30px;
`
const IconLabel = styled.label`
color: white;
font-size: 16px;
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

const NavProfile = () => {
  return (
    <NavContainer>
      <LinksContainer >

          <ViewButton>Profile</ViewButton>

          <ViewButton>Reviews</ViewButton>
   
          <ViewButton>Favorites</ViewButton>

          <ViewButton>Watched</ViewButton>

          <ViewButton>Watchlist</ViewButton>
      
      </LinksContainer>
      <IconsC>
        <IconContainer>
          <IconImg src={ViewsIcon}></IconImg>
          <IconLabel>140K</IconLabel>
        </IconContainer>
        <IconContainer>
          <IconImg src={favIcon}></IconImg>
          <IconLabel>540</IconLabel>
        </IconContainer>
        <IconContainer>
          <IconImg src={PendingIcon}></IconImg>
          <IconLabel>400</IconLabel>
        </IconContainer>
      </IconsC>


    </NavContainer>

  );
};

export default NavProfile;

