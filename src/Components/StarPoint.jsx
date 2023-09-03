import React from 'react'
import image from "../assets/Icons/icons8-star-64.png"
import styled from 'styled-components'

const Star = styled.img`
width: 30px;
height: 30px;
`

export default function StarPoint() {
  return (
    <Star src={image}/>
  )
}
