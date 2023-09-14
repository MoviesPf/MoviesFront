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
margin-top: 30px;
`
const MoviePoster = styled.img`
margin-left: 30px;
border-radius: 30px;
height: 250px;
    &:hover {
        transform: scale(1.05);
    }
`
const DetailContainer = styled.div`
padding-right: 30px;
height: auto;
width: 100%;
display: flex;
margin-left: 30px;
position: relative;
flex-direction: column;
justify-content: space-between;
`
const ContextRow = styled.div`
padding-bottom: 10px;
justify-content: space-between;
flex-direction: row;
align-items: center;
height: auto;
display: flex;
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

export default function ReviewContainer({reviewDate, year,genreA,genreB,overview,progImge,starVal, title, programId}) {

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

            <ContextRow>
              <OverviewText>{overview}</OverviewText>
            </ContextRow>

            <ContextRow>
              <OverviewText>{reviewDate}</OverviewText>
              <StarsRow>{starsCount}</StarsRow>
            </ContextRow>

        </DetailContainer>

    </CardContainer>
  )
}
