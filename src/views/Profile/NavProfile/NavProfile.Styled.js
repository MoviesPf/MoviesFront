import styled from 'styled-components'

export const NavContainer = styled.div`
background-color: #131212;
padding-bottom: 10px;
padding-top: 10px;
font-size: 4rem;
display: flex;
justify-content: space-around;
border: 2px solid;
border-color: black;
align-items: center;
top: 3rem;
z-index: 99;
position: sticky;
`

export const LinksContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const ViewButton = styled.button`
background:${(props) => (props.$check ? '#19d576' : "transparent")};
color: ${(props) => (props.$check ? 'black' : "white")};
width: 140px;
height: 50px;
border-radius: 200px;
border: 2px solid transparent;
font-size: 25px;
font-weight: bold;
cursor: pointer;
  &:hover {
    ${(props) => (props.$check ? null :` color: #19d576; background: black;`)}
}
`

export const IconsC = styled.div`
padding-right: 10px;
padding-left: 10px;
display: flex;
`

export const IconContainer = styled.div`
margin-right: 10px;
display: flex;
flex-wrap: nowrap;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const IconImg = styled.img`
width: 30px;
height: 30px;
`

export const IconLabel = styled.label`
color: white;
font-size: 16px;
`

export const EditButton = styled.button`
background: #288858;
border: 2px solid transparent;
border-radius: 10px;
padding: 5px;
display:flex;
color: white;
cursor: pointer;
transition: all 0.25s;
&:hover {
  background: #185134
}
`