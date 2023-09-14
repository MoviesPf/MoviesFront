import { useState ,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleList, getUserPlaylists } from '../../../Redux/actions'

import favIcon from "../../../assets/Icons/icons8-love-90.png"
import ViewsIcon from "../../../assets/Icons/icons8-view-90.png"
import PendingIcon from "../../../assets/Icons/icons8-delivery-time-96.png"
import emptyStar from "../../../assets/Icons/icons8-star-52.png"
import fullStar from "../../../assets/Icons/icons8-star-100 green.png"

import {ScoreContainer, IconsC, IconContainer, IconImg, IconLabel, EmptStarC, ReviewButton} from "./ButtonOptions.Styled"

export const ButtonOptions = ({setShowModal, setShowError, programId, rating, userId}) => {
  const playlistData = useSelector( (state) => state.userPlaylists)
  const [loading, setLoading] = useState(true);
  
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(getUserPlaylists(userId)).then(()=>{setLoading(false)}).then(console.log(playlistData))
  },[dispatch]);
  
  let playlists = [];
  
  let favorites = [];
  let isFav = false;
  
  let watchlist = [];
  let isWatchL = false;
  
  let watched = [];
  let isWatch = false;

    playlists = playlistData.finalPlaylists;
    favorites = playlists.length ? playlists.filter(playlist => playlist.name === "Favorites")[0] : [];
    isFav = favorites.programs.filter(program => program.id === programId).length === 1 ? true : false;
    
    watchlist = playlists.length ? playlists.filter(playlist => playlist.name === "WatchList")[0] : [];
    isWatchL = watchlist.programs.filter(program => program.id === programId).length === 1 ? true : false;
    
    watched = playlists.length ? playlists.filter(playlist => playlist.name === "Watched")[0] : [];
    isWatch = watched.programs.filter(program => program.id === programId).length === 1 ? true : false;

  console.log(isWatch);
  console.log(isFav);
  console.log(isWatchL);

 const [checkButtonState,setCheckButtonsSTate] =  useState({
   watched: !isWatch,
   favs: !isFav,
   watchlist: !isWatchL,
 })

  function scoreHandler(event){
    switch (event.target.id) {

      case "Watched":
        if(checkButtonState.watched === true){
          // Lo quita de watchd
          setCheckButtonsSTate({...checkButtonState, watched: false})
        } else {
          setCheckButtonsSTate({...checkButtonState, watched: true})
        }
        dispatch(handleList(userId, event.target.id, programId))
        break;
    
      case "Favorites":
        if(checkButtonState.favs === true){
          // Lo quita de favs
          setCheckButtonsSTate({...checkButtonState, favs: false})
        } else {
          setCheckButtonsSTate({...checkButtonState, favs: true})
        }
        dispatch(handleList(userId, event.target.id, programId))
        break;
    
      case "WatchList":
        if(checkButtonState.watchlist === true){
          // Lo quita de watchlist
          setCheckButtonsSTate({...checkButtonState, watchlist: false})
        } else {
          setCheckButtonsSTate({...checkButtonState, watchlist: true})
        }
        dispatch(handleList(userId, event.target.id, programId))
        break;
      
      default:
      break;
    } 
  }

  return (
    <div>
    {
      loading ? 
        <div></div>
      :
      <ScoreContainer>
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
            {new Array(5).fill('').map((_, index) => (<IconImg key={index} src={index < rating ? fullStar : emptyStar} />))}
        </EmptStarC>

        <ReviewButton onClick={()=> { setShowError(false); setShowModal(true)}}> Review </ReviewButton>

      </ScoreContainer>
    }
    </div>
  )
}
