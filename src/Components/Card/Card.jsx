import React from 'react';
import styled from 'styled-components'
import defaultImg from "../../assets/defaultMovie.png"

const ProgramCard = styled.img`
width: 160px;
height: 240px;
margin-top: 20px;
margin-bottom: 20px;
margin-left: 15px;
border-radius: 30px;
`

export const Card = ({ program }) => {

  let image =  defaultImg
  if (program.poster){image = program.poster}

  return (
      <ProgramCard src={image} alt={program.title} />
  );
};
