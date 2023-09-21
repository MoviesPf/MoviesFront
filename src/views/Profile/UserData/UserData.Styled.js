import styled from 'styled-components'

export const UserBarr = styled.div`
position: relative;
align-items: center;
height: 10em;
display: flex;
width: 100%;
z-index: 2;
`

export const UserNameContainer = styled.div`
margin-right: 20px;
margin-left: 20px;
width: 80%;
display: flex;
color: white;
flex-direction: column;
z-index: 2;
`

export const NameAndIcon = styled.div`
width: 100%;
display: flex;
flex-wrap: nowrap;
position: relative;
justify-content: flex-start;
align-items: center;
`

export const NameAndNickname = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`

export const AliasAndNick = styled.div`
width: max-content;
display: flex;
flex-direction: row;
align-items: center;
`

export const Alias = styled.h1`
margin-right: 10px;
color: #288858;
`

export const Background = styled.div`
border: 5px solid;
border-color: white;
border-radius: 100%;
background-color: black;
position: relative;
margin-left: 50px;
top: -95px;
`

export const UserPicture = styled.img`
border-radius: 100%;
height: 250px;
width: 250px;
`

export const Boina = styled.img`
border-radius: 100%;
height: 250px;
width: 280px;
position: absolute;
left: -10px;
top: -120px;
`

export const BoinaIcon = styled.img`
height: 50px;
margin-left: 10px;
width: 50px;
`

export const Name = styled.h1`
margin: 0;
color: #ffffff;
`