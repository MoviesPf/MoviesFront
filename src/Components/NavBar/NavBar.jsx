import React, { useState } from 'react'
import { SearchBar } from '../SearchBar/SearchBar'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const NavContainer = styled.div`
background-color: #131212;
display: flex;
width: 100%;
height: 6vh;
background: linear-gradient(to top,#1312127d, transparent  );
backdrop-filter: blur(10px);

position: absolute;
justify-content: flex-end;
align-items: center;
z-index: 6;
`
const ComponentsC = styled.div`
display: flex;
position: relative;
margin-right: 60px;
`
const Buttons = styled.button`
background: transparent; 
border: 2px solid transparent;
color: #19D576;
font-size: 16px;
margin-bottom: 5px;
`

const NavBar = () => {

  const navigate = useNavigate()
  function redirectTo(event){
    navigate(event.input.value);
  }

  return (
    <NavContainer>
      <ComponentsC>
        <SearchBar/>

       <Buttons value="/login" onClick={redirectTo}>Loguin</Buttons>

       <Buttons value="/signin" onClick={redirectTo}>Signin</Buttons>

      </ComponentsC>
    </NavContainer>
  )
}
export default NavBar;