import React from 'react'
import styled from 'styled-components'

import defaultImg from "../../assets/defaultMovie.png"
import CardDetail from "../FakeDetail/DeteailCard"
import LogUserProgramOptions from "../FakeDetail/LogUserProgramOptions"



const AreaC = styled.div`
 /*  background-color:#3a4b381c; */
  background-color: #5050501c;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: nowrap;
`

const ProgramCard = styled.img`
width: 340px;
height: 480px;
margin-top: 20px;
margin-bottom: 20px;
margin-left: 15px;
border-radius: 30px;
position: relative;
top: -20%;
left: 6%;
z-index: 2;
`


export default function ProgramDetailTopAreaC() {
  
  let imageP =  defaultImg
  const temporalOverview = "we all knew barbie was going to be funny. we all knew it’d have something to say about the “female coming-of-age,” as all of greta gerwig’s movies have thus far. and we all knew margot robbie and ryan gosling would turn in note-perfect performances as barbie and ken. and they did.what i didn’t know was how much barbie would mean - not truly, not fully. how much it would mean to me, to the women sitting to my left and right, to all of us. the depth and breadth of its central message was something i couldn’t have ever anticipated, despite having the utmost faith in greta gerwig at every twist and turn. and even though i’d been looking forward to this film for years (five, in fact), it hit me right when i needed it most. a movie about growing up and realizing womanhood isn’t all pink, pleasure, and possibility. realizing that much of the world will hate you - always - no matter what you do, simply because of who you are. realizing that there comes a point when you either have to accept complacency within the patriarchy, or ostracization and vilification outside of it."
  
  
  return (
    <AreaC>

        {/* La imagen */}
        <ProgramCard src={imageP}/>

        {/* El componente de datos */}
        <CardDetail    
            year={2023}
            genreA={"Ci-fi"}
            genreB={"Action"}
            lenguage={"Spanish"}
            overview={temporalOverview}
            starVal={5}
            title={"Pelicula"}/>

    {/* El componente de opciones */}
        <LogUserProgramOptions/>        

  </AreaC>
  )
}
