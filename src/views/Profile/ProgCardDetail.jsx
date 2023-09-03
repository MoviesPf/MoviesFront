import React, { useState } from 'react'
import styled from 'styled-components'
import defaultImg from "../../assets/defaultMovie.png"
import StarPoint from '../../Components/StarPoint'

const CardContainer = styled.div`
height: auto;
display: flex;
position: relative;
flex-direction: row;
padding-top: 20px;
padding-bottom: 20px;
`
const MoviePoster = styled.img`
border-radius: 30px;
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
font-size: 20px;
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

export default function ProgCardDetail({year,genreA,genreB,lenguage,overview,progImge,starVal}) {

    const starsCount = []
    for (let index = 0; index < starVal; index++) {
        starsCount.push(<StarPoint key={index}/>);
        
    }

    let image =  defaultImg
    if (progImge){image = progImge}

  return (
    <CardContainer>
        <MoviePoster src={image}/>
        <DetailContainer>
             <ContextRow>
                <Title>Pelicula</Title>
                <MovieData>{`${year} ‧ ${genreA} / ${genreB} ‧ ${lenguage}`}</MovieData>
            </ContextRow>
            <StarsRow>
                {starsCount}
            </StarsRow>
            <OverviewText>{overview}</OverviewText>
        </DetailContainer>

    </CardContainer>
  )
}
