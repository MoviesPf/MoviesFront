import styled from 'styled-components';

export const ViewContainer = styled.div`
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
`

export const UserBackground = styled.img`
  width: 100%;
  height: 40vh;
  object-fit: cover;
  position: relative;
  z-index: 1;
`
export const AreaContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`

export const IconLabel = styled.label`
  color: white;
  font-size: 26px;
  position: relative;
`

export const LineHR = styled.hr`
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
`

export const LineSubHR = styled.hr`
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgb(0, 128, 0);
`

export const LineNavHR = styled.hr`
  margin-top: 0;
  margin-bottom: 0;
  border: 0;
  height: 22px;
  box-shadow: inset 0 22px 30px -29px rgb(0, 128, 0);
`


export const BodyContainer = styled.div`
  width: 100%;
  height: auto; // Esto haco que la altura cubra toda la pantalla
  display: flex;
  position: relative;
  flex-direction: column;
  padding-right: 5%;
  padding-left: 5%;
  margin-top: 2%;
`

export const CardsContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-wrap: wrap;
padding-top: 1em;
align-items: center;
justify-content:start;
`

export const AllCardsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 1em;
  justify-content:center;
`

export const EmptyMessage = styled.h1`
  margin: 30px;
`

export const ButtonMas = styled.button`
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
export const TitleAndButton = styled.div`
  display: flex;
  justify-content: space-between;
`