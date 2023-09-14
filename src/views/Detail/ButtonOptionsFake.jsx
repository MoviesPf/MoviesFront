import favIcon from "../../assets/Icons/icons8-love-90.png"
import ViewsIcon from "../../assets/Icons/icons8-view-90.png"
import PendingIcon from "../../assets/Icons/icons8-delivery-time-96.png"
import emptyStar from "../../assets/Icons/icons8-star-52.png"
import {styled}from 'styled-components'

const ScoreContainer = styled.div`
  background-color: #1C1C1C;
  margin-right: 100px;
  display: flex;
  height: min-content;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 13px;
  margin-top: 420px;

span {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 250px;
  width: 250px;
  visibility: hidden;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px;
  border-radius: 15px;
  transition: visibility 0s, opacity 0.3s ease-in-out;
}

&:hover {
  background: rgb(12, 11, 11);   
  span {
    visibility: visible;
    opacity: 1;
  }
}
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
`

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