import React from 'react';
import styled from 'styled-components'
import { Link } from "react-router-dom";
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
    <Link to={`/detail/${program.id}`} >
      <ProgramCard src={image} alt={program.title} />
    </Link>
  );
};