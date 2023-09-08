import React from 'react';
import NavProfile from './NavProfile'
import styled from 'styled-components'
import PresentationLine from "./PresentationLine"
import {NavBar}from "../../Components/NavBar/NavBar"
import ProgCardDetail from "../Profile/ProgCardDetail"
import {Card} from '../../Components/Card/Card'
import { useDispatch, useSelector } from 'react-redux';
import defaultBackground from "../../assets/background.jpg"



const ViewContainer = styled.div`
  background-color: #1C1C1C;
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: nowrap;
  flex-direction: column;
`
const UserBackground = styled.img`
  width: 100%;
  height: 50vh;
  object-fit: cover;
  position: relative;
  z-index: 1;
`
const AreaContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`

const ElementsBarr = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
`

const IconLabel = styled.label`
  color: white;
  font-size: 26px;
  position: relative;
`

const LineHR = styled.hr`
  border: 0;
  height: 2px;
  margin-top: 0;
  margin-bottom: 0;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(23, 255, 139, 255), rgba(0, 0, 0, 0));
`

const LineSubHR = styled.hr`
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`

const LineNavHR = styled.hr`
  margin-top: 0;
  margin-bottom: 0;
  border: 0;
  height: 22px;
  box-shadow: inset 0 22px 30px -29px rgba(23, 255, 139, 222);
`
const BodyContainer = styled.div`
  width: 57%;
  height: auto; // Esto haco que la altura cubra toda la pantalla
  display: flex;
  position: relative;
  margin-left: 10%;
  flex-direction: column;
  padding-bottom: 5%;
  margin-top: 2%;
`
// Temporal Card Container
const CardsContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
`



const Profile = () => {
//   const user = useSelector(state => state.user);
  const temporalOverview = "An intelligence operative for a shadowy global peacekeeping agency races to stop a hacker from stealing its most valuable — and dangerous — weapon."
  const user = useSelector((state) => state.user);

  return (
    <ViewContainer>

        {/* NavBar y background ⬇ */}
          <NavBar/>
          <UserBackground src={user.background ? user.background : defaultBackground}/>

        {/* Area de contenido -/Usuario/Barra de navegacion/Peliculas- ⬇ */}
          <AreaContainer>
            <ElementsBarr>
              {/* Usuario/Barra de navegacion ⬇ */}
              <PresentationLine avatar={user.avatar} name={user.name} nickname ={user.nickname} status={user.status ? user.status : "Movies Fan!!"}/>
              <NavProfile/>
            </ElementsBarr>
            
          <div>
            {/* Peliculas ⬇ */}
          <LineNavHR/>
          <BodyContainer>
             {/* "Fake Body" El contenido de esta area es el que ira cambiando segun
             la seleccion que se haga en la barra de navegacion del usuario (fav/list/profile/etc..) */}
            <IconLabel>Reviews</IconLabel>
            <LineHR/>
            <ProgCardDetail
              year={2023}
              genreA={"Ci-fi"}
              genreB={"Action"}
              lenguage={"Spanish"}
              overview={temporalOverview}
              starVal={5}/>
            <LineSubHR/>
            <ProgCardDetail
              year={2023}
              genreA={"Ci-fi"}
              genreB={"Action"}
              lenguage={"Spanish"}
              overview={temporalOverview}
              starVal={5}/>
            <LineSubHR/>
            <IconLabel>Likes</IconLabel>
            <LineHR/>

              <CardsContainer>
                <Card program={{program:{poster:null,title:null},}}/>
                <Card program={{program:{poster:null,title:null},}}/>
                <Card program={{program:{poster:null,title:null},}}/>
                <Card program={{program:{poster:null,title:null},}}/>
                <Card program={{program:{poster:null,title:null},}}/>
              </CardsContainer>

            <LineHR/>
            <IconLabel>Watchlist</IconLabel>
            <LineHR/>

            <CardsContainer>
                <Card program={{program:{poster:null,title:null},}}/>
                <Card program={{program:{poster:null,title:null},}}/>
                <Card program={{program:{poster:null,title:null},}}/>
                <Card program={{program:{poster:null,title:null},}}/>
                <Card program={{program:{poster:null,title:null},}}/>
              </CardsContainer>

            <LineHR/>
            <IconLabel>Watched</IconLabel>
            <LineHR/>

            <CardsContainer>
                <Card program={{program:{poster:null,title:null},}}/>
                <Card program={{program:{poster:null,title:null},}}/>
                <Card program={{program:{poster:null,title:null},}}/>
                <Card program={{program:{poster:null,title:null},}}/>
                <Card program={{program:{poster:null,title:null},}}/>
              </CardsContainer>
              
            <LineHR/>
          </BodyContainer>
          </div>
      
          </AreaContainer>

    </ViewContainer>
  );
};

export default Profile;

// const user = {
//     "id": "df76d866-783a-4f23-8a9d-18e715fa1ebc",
// 		"name": "Marcelo",
// 		"nickname": "ElMariano123",
// 		"avatar": "https://randomuser.me/api/portraits/men/75.jpg",
// 		"email": "chau@gmail.com",
// 		"password": "123456",
// 		"status": "may the fourth be with you",
// 		"admin": false,
// 		"banned": false,
// 		"PlaylistId": null,
//         "background": "https://random.imagecdn.app/500/150",
// }