import React from 'react'
import styled from 'styled-components'

import defaultImg from "../../assets/defaultMovie.png"
import ProgCardDetail from './DetailCard'
import LogUserProgramOptions from './LogUserProgramOptions'



const AreaC = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: nowrap;
  margin-top: 200px;
  width: 100%;
  height: 100%;
  justify-content: space-around;
`

const ProgramCard = styled.img`
width: 340px;
height: 480px;
margin-bottom: 20px;
border-radius: 30px;
z-index: 2;
`


const ProgramDetailTopAreaC = (  {programDetail, year, runtimeFormatted}  ) => {
  console.log(programDetail, year, runtimeFormatted, "Data1" );
  let imageP =  programDetail.poster
  
  return (
    <AreaC>

        {/* La imagen */}
        <ProgramCard src={imageP}/>

        {/* El componente de datos */}
        <ProgCardDetail props={{programDetail, year, runtimeFormatted}}/>

        {/* El componente de opciones */}
        <LogUserProgramOptions/>        

    </AreaC>
  )
}

export default ProgramDetailTopAreaC;