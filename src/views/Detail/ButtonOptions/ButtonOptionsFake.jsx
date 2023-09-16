import favIcon from "../../../assets/Icons/icons8-love-90.png"
import ViewsIcon from "../../../assets/Icons/icons8-view-90.png"
import PendingIcon from "../../../assets/Icons/icons8-delivery-time-96.png"
import emptyStar from "../../../assets/Icons/icons8-star-52.png"
import {ScoreContainer, IconsC, IconContainer, IconImg, IconLabel, EmptStarC, ReviewButton} from "./ButtonOptions.Styled"

export const ButtonOptionsFake =() => {
  return (
    <ScoreContainer>
      <IconsC>
        <IconContainer>
          <IconImg src={ViewsIcon} id={"Watched"} $check={true}></IconImg>
          <IconLabel>Watched</IconLabel>
        </IconContainer>
        <IconContainer>
          <IconImg src={favIcon} id={"Favorites"} $check={true}></IconImg>
          <IconLabel>Favs</IconLabel>
        </IconContainer>
        <IconContainer>
          <IconImg src={PendingIcon} id={"WatchList"} $check={true}></IconImg>
          <IconLabel>Watchlist</IconLabel>
        </IconContainer>
      </IconsC>
      <EmptStarC>
        { new Array(5).fill('').map((_, index) => ( <IconImg key={index} src={emptyStar}/>))}
      </EmptStarC>
      <span>You must be logged in to use these options, try creating an account!</span>
      <ReviewButton>Review</ReviewButton>
    </ScoreContainer>
  )
}