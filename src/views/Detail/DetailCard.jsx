import React, { useState } from 'react'
import styled from 'styled-components'
/* import StarPoint from '../../Components/StarPoint' */


const ProgramData = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 40px;
  display: flex;
  position: relative;
  flex-direction: column;
  margin-top: 200px;
`
const DetailContainer = styled.div`
height: auto;
display: flex;
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

export default function ProgCardDetail({props}) {
   const {year, runtimeFormatted, programDetail} = props;
   /*  const starsCount = []
    for (let index = 0; index < starVal; index++) {
        starsCount.push(<StarPoint key={index}/>);
        
    } */

  return (
    <ProgramData>
      <DetailContainer>
              <ContextRow>
              <Title>{programDetail.title}</Title>
              <MovieData>{`${year} ‧ ${programDetail?.Genres?.map(g => g.name).slice(0, 2).join(' / ')}  ‧ ${runtimeFormatted}`}</MovieData>
          </ContextRow>
        {/*   <StarsRow>
              {starsCount}
          </StarsRow> */}
          <OverviewText>{programDetail.overview}</OverviewText>
          <CastContainer>{programDetail?.cast?.map(c => c.split(' - ')[0]).slice(0, 5).join(', ')}</CastContainer>
      </DetailContainer>
    </ProgramData>
  )
}