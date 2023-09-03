import React, { useState } from 'react'
import styled from 'styled-components'
import StarPoint from '../../Components/StarPoint'


const ProgramData = styled.div`
  width: 40%;
  height: auto;
  padding-right: 40px;
  padding-bottom: 40px;
  display: flex;
  position: relative;
  flex-direction: column;
  padding-top: 3.3%;
  margin-left: 7%;
`
const DetailContainer = styled.div`
height: auto;
display: flex;
margin-left: 30px;
position: relative;
flex-direction: column;
`
const ContextRow = styled.div`
height: auto;
display: flex;
position: relative;
flex-direction: row;
align-items: center;
justify-content: space-between;
flex-wrap: nowrap;
`
const Title = styled.label`
height: auto;
display: flex;
color: white;
font-size: 40px;
position: relative;
`
const MovieData = styled.label`
height: auto;
display: flex;
color: white;
font-size: 20px;
position: relative;  
`
const StarsRow = styled.div`
height: auto;
display: flex;
color: white;
margin-top: 5px;
margin-bottom: 5px;

position: relative;
flex-direction: row;
`
const OverviewText = styled.div`
height: auto;
display: flex;
color: white;
font-size: 20px;
position: relative;
flex-direction: row;
`
const CastContainer = styled.label`
  width: 300px;
  height: auto;
  background-color:#6161611c;
  color: white;
  display: flex;
  position: relative;
  flex-direction: column;
  font-size: 26;
  margin-top: 20px;
`

export default function ProgCardDetail({year,genreA,genreB,lenguage,overview,progImge,starVal,title}) {

    const starsCount = []
    for (let index = 0; index < starVal; index++) {
        starsCount.push(<StarPoint key={index}/>);
        
    }

  return (
    <ProgramData>
      <DetailContainer>
              <ContextRow>
              <Title>{title}</Title>
              <MovieData>{`${year} ‧ ${genreA} / ${genreB} ‧ ${lenguage}`}</MovieData>
          </ContextRow>
          <StarsRow>
              {starsCount}
          </StarsRow>
          <OverviewText>{overview}</OverviewText>
          <CastContainer>{"Fulano, Mengano , Sorano, Boby"}</CastContainer>
      </DetailContainer>
    </ProgramData>

  
  )
}