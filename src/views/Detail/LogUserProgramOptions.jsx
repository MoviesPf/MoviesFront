import React from 'react'

import favIcon from "../../assets/Icons/icons8-love-90.png"
import ViewsIcon from "../../assets/Icons/icons8-view-90.png"
import PendingIcon from "../../assets/Icons/icons8-delivery-time-96.png"
import emptyStar from "../../assets/Icons/icons8-star-52.png"
import styled from 'styled-components'

const ScoreContainer = styled.div`
  background-color: #1C1C1C; 
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 13px;
  margin-top: 200px;
`

const IconContainer = styled.div`
display: flex;
flex-wrap: nowrap;
flex-direction: column;
justify-content: center;
align-items: center;
margin-right: 10px;
margin-left: 10px;
`
const IconsC = styled.div`
display: flex;
margin-top: 12px;
margin-right: 10px;
margin-left: 10px;
`
const IconImg = styled.img`
width: 30px;
height: 30px;
`
const IconLabel = styled.label`
color: white;
font-size: 16px;
`
const EmptStarC = styled.div`
display: flex;
flex-wrap: nowrap;
flex-direction: row;
margin-top: 22px;
`
const ReviewButton = styled.button`
width: 140px;
height: 50px;
border-radius: 200px;
margin-top: 22px;
margin-bottom: 22px;
background: transparent; 
border: 2px solid transparent;
color: rgb(25, 213, 118);
background: #6161611c;
font-size: 25px;
font-weight: bold;
pointer-events: none;


cursor: pointer; 
  &:hover {
    color: #1b1b1b;
    background: rgb(25, 213, 118); 

  }
`
const LineSubHR = styled.hr`
 border: 0;
 height: 4px;
 background: #333;
 background-image: linear-gradient(to right, #ccc, #333, #ccc);
`



export default function LogUserProgramOptions() {
  return (
    <ScoreContainer >
            <IconsC>
                <IconContainer>
                    <IconImg src={ViewsIcon}></IconImg>
                    <IconLabel>Watched</IconLabel>
                </IconContainer>
                <IconContainer>
                    <IconImg src={favIcon}></IconImg>
                    <IconLabel>Favs</IconLabel>
                </IconContainer>
                <IconContainer>
                    <IconImg src={PendingIcon}></IconImg>
                    <IconLabel>Watchlist</IconLabel>
                </IconContainer>
                
            </IconsC>
   
            <EmptStarC>
                <IconImg src={emptyStar}></IconImg>
                <IconImg src={emptyStar}></IconImg>
                <IconImg src={emptyStar}></IconImg>
                <IconImg src={emptyStar}></IconImg>
                <IconImg src={emptyStar}></IconImg>
            </EmptStarC>

        
        <ReviewButton>Review</ReviewButton>
    </ScoreContainer>
  )
}
