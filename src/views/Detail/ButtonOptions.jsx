import React from 'react'
import { useState ,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleList } from '../../Redux/actions'
import favIcon from "../../assets/Icons/icons8-love-90.png"
import ViewsIcon from "../../assets/Icons/icons8-view-90.png"
import PendingIcon from "../../assets/Icons/icons8-delivery-time-96.png"
import emptyStar from "../../assets/Icons/icons8-star-52.png"
import {styled ,keyframes, css }from 'styled-components'
import fullStar from "../../assets/Icons/icons8-star-100 green.png"
import {getUserPlaylists} from "../../Redux/actions"
import e from 'cors';

const scaleUp = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.5);
  }
`

const ScoreContainer = styled.div`
  visibility: ${(props) => props.$isLogin ? 'visible' : 'hidden'};
  opacity: ${(props) => props.$isLogin ? 1 : 0};
  background-color: #1C1C1C;
  margin-right: 100px;
  display: flex;
  height: min-content;
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
 filter: brightness(${(props) => (props.$check ? '0.5' : '1')});
  width: 30px;
  height: 30px;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  cursor: pointer;
  &:hover {
    ${    
    (props) => (props.$check ? css` animation: ${scaleUp} 0.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;` : null )
  }
    
  }
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
cursor: pointer; 
  &:hover {
    color: #1b1b1b;
    background: rgb(25, 213, 118); 

  }
`
export const ButtonOptions = ({setShowModal, setShowError, programId, rating}) => {
  const user = useSelector( (state) => state.user )
  
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(getUserPlaylists(user.id))
  },[dispatch, user.id,])
  
    const playlistData = useSelector( (state) => state.userPlaylists )
    const playlists = playlistData.finalPlaylists;
    
    const favorites = playlists ? playlists.filter(playlist => playlist.name === "Favorites")[0] : [];
    const isFav = favorites.programs.filter(program => program.id === programId).length === 1 ? true : false;
    
    console.log(isFav);
    
    const watchlist = playlists ? playlists.filter(playlist => playlist.name === "WatchList")[0] : [];
    const isWatchL = watchlist.programs.filter(program => program.id === programId).length === 1 ? true : false;
    
    console.log(isWatchL);
    
    const watched = playlists ? playlists.filter(playlist => playlist.name === "Watched")[0] : [];
    const isWatch = watched.programs.filter(program => program.id === programId).length === 1 ? true : false;
    console.log(isWatch);



 const [checkButtonState,setCheckButtonsSTate] =  useState({
   watched: !isWatch,
   favs: !isFav,
   watchlist: !isWatchL,
 })


  function scoreHandler(event){
    if (user) {
      switch (event.target.id) {

        case "Watched":
          if(checkButtonState.watched === true){
             // Lo quita de watchd
             setCheckButtonsSTate({...checkButtonState, watched: false})
          } else {
            setCheckButtonsSTate({...checkButtonState, watched: true})
          }
          dispatch(handleList(user.id, event.target.id, programId))
        break;
    
        case "Favorites":
          if(checkButtonState.favs === true){
            // Lo quita de favs
            setCheckButtonsSTate({...checkButtonState, favs: false})
         } else {
           setCheckButtonsSTate({...checkButtonState, favs: true})
         }
         dispatch(handleList(user.id, event.target.id, programId))
        break;
    
        case "WatchList":
          if(checkButtonState.watchlist === true){
            // Lo quita de watchlist
            setCheckButtonsSTate({...checkButtonState, watchlist: false})
         } else {
           setCheckButtonsSTate({...checkButtonState, watchlist: true})
         }
         dispatch(handleList(user.id, event.target.id, programId))
        break;
      
        default:
          break;
      } 
    }
  }

  return (
    <ScoreContainer $isLogin={user.id ? true : false}> {/* Cambiar por: {user.id? true:false} */}
            <IconsC>
                <IconContainer>
                    <IconImg src={ViewsIcon} id={"Watched"} $check={checkButtonState.watched}  onClick={scoreHandler}></IconImg>
                    <IconLabel>Watched</IconLabel>
                </IconContainer>
                <IconContainer>
                    <IconImg src={favIcon} id={"Favorites"} $check={checkButtonState.favs} onClick={scoreHandler}></IconImg>
                    <IconLabel>Favs</IconLabel>
                </IconContainer>
                <IconContainer>
                    <IconImg src={PendingIcon} id={"WatchList"} $check={checkButtonState.watchlist} onClick={scoreHandler}></IconImg>
                    <IconLabel>Watchlist</IconLabel>
                </IconContainer>
            </IconsC>
   
            <EmptStarC>
            {new Array(5).fill('').map((_, index) => (
                <IconImg
                  key={index}
                  src={index < rating ? fullStar : emptyStar} 
                />
              ))}
            </EmptStarC>

        
        <ReviewButton onClick={()=> { 
           setShowError(false)
           setShowModal(true)
          } 
        }
        >
          Review
        </ReviewButton>
    </ScoreContainer>
  )
}
