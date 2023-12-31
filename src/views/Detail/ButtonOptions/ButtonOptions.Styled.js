import {styled ,keyframes, css }from 'styled-components'

export const scaleUp = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.5);
  }
`;

export const ScoreContainer = styled.div`
  background-color: #1C1C1C;
  display: flex;
  height: min-content;
  width: min-content;
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
`;

export const IconsC = styled.div`
display: flex;
margin-top: 12px;
margin-right: 10px;
margin-left: 10px;
`;

export const IconContainer = styled.div`
display: flex;
flex-wrap: nowrap;
flex-direction: column;
justify-content: center;
align-items: center;
margin-right: 10px;
margin-left: 10px;
`;

export const IconImg = styled.img`
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
`;

export const IconLabel = styled.label`
color: white;
font-size: 16px;
`;

export const EmptStarC = styled.div`
display: flex;
flex-wrap: nowrap;
flex-direction: row;
margin-top: 22px;
`;

export const ReviewButton = styled.button`
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
    ${(props) => 
      !props.disabled &&
      css`
      color: #1b1b1b;
      background: rgb(25, 213, 118); 
      `
    }

  }
`;

export const AlreadyReviewedMessage = styled.div`
  background-color: #6161611c;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 0px 0px 15px 15px;
`;

export const AlreadyReviewedText = styled.h1`
  background: rgb(0 0 0 / 21%);
  font-weight: bold;
  border-radius: 10px;
  padding: 5px 10px;
  margin: 10px 0;
  font-size: 18px;
  color: rgb(25, 213, 118);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 2px solid rgb(25 213 118 / 23%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
`;