import React, { useState } from 'react'
import styled from 'styled-components'
import defaultImg from "../../assets/defaultMovie.png"
import StarPoint from '../../Components/StarPoint'
import { Link } from 'react-router-dom'

const CardContainer = styled.div`
border-radius: 30px;
background-color: #131212;
height: auto;
width: 90%;
display: flex;
flex-direction: row;
padding-top: 20px;
padding-bottom: 20px;
margin-bottom: 30px;
`
const MoviePoster = styled.img`
margin-left: 30px;
border-radius: 30px;
height: 350px;
    &:hover {
        transform: scale(1.05);
    }
`
const DetailContainer = styled.div`
padding: 20px;
height: auto;
width: 100%;
display: flex;
margin-left: 30px;
position: relative;
flex-direction: column;
justify-content: space-between;
`
const ContextRow = styled.div`
padding:20px;
height: auto;
display: flex;
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
padding-right: 20px;
height: auto;
display: flex;
color: white;
margin-top: 5px;
margin-bottom: 5px;
font-size: 20px;
position: relative;
flex-direction: row;
justify-content: end;
`
const OverviewText = styled.div`
height: auto;
display: flex;
color: white;
font-size: 20px;
position: relative;
flex-direction: row;
`

export default function ReviewContainer({year,genreA,genreB,overview,progImge,starVal, title, programId}) {

    const starsCount = []
    for (let index = 0; index < starVal; index++) {
        starsCount.push(<StarPoint key={index}/>);
        
    }

    let image =  defaultImg
    if (progImge){image = progImge}

  return (
    <CardContainer>
      <Link to={`/detail/${programId}`}>
        <MoviePoster src={image}/>
        </Link>
        <DetailContainer>
            <ContextRow>
                <Title>{title}</Title>
                <MovieData>{`${year} ‧ ${genreA} / ${genreB}`}</MovieData>
            </ContextRow>
            <OverviewText>{overview}</OverviewText>
            <StarsRow>{starsCount}</StarsRow>
        </DetailContainer>

    </CardContainer>
  )
}
