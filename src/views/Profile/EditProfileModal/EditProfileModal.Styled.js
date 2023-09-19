import styled from "styled-components";

export const ContainerModalReview = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.7);
z-index: 999;
`

export const ModalEdit = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: #1c1c1c;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
padding: 10px;
width: 600px;
border-radius: 10px;
box-shadow: 0px 0px 108px 23px rgba(0, 0, 0, 0.3);
`

export const Top = styled.div`
border-radius: 10px;
width: 100%;
`

export const Fondo = styled.img`
border-radius: 10px;
width: 100%;
height: 190px;
object-fit: cover;
`

export const CloseButton = styled.button`
font-size: 10px;
position: absolute;
border: 0px;
border-radius: 100%;
background-color: #000000b9;
color: white;
top:15px;
right: 15px;
padding-right: 10px;
padding-left: 10px;
padding-bottom: 5px;
padding-top: 5px;
transition: all 0.25s;
  
&:hover {
  background-color: grey;
}
 `
  
export const Content = styled.div`
background-color: black;
color: white;
border-radius: 10px;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

export const TopContent = styled.div`
position: relative;
width: 100%;
height: 120px;
display: flex;
align-items: center;
`

export const Avatar = styled.img`
border-radius: 100%;
height: 150px;
width: 150px;
`

export const Background = styled.div`
background-color: black;
margin-left: 10px;
top: -50px;
border: 2px solid;
border-color: white;
border-radius: 100%;
position: relative;
width: 30%;
`

export const NameStatusAlias = styled.div`
padding-left: 5px;
padding-right: 5px;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`

export const Alias = styled.div`
display: flex;
align-items: center;
`

export const Nick = styled.h1`
font-size: 18px;
padding-right: 10px;
color: green;
`

export const AllForm = styled.div`
padding: 5px;
display: flex;
width: 100%;
flex-direction: column;
justify-content: center;
align-items: center;

`

export const Form = styled.div`
border-radius: 15px;
background-color: #1c1c1c;
width: 100%;
padding: 5px;
display: flex;
justify-content: center;
`

export const InputForm = styled.div`
width: 50%;
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-between;
`

export const Label = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: end;
`

export const EditInput = styled.input`
margin-top: 10px;
margin-left: 10px;
margin-right: 20px;
`

export const CloudinaryButtons = styled.div`
width: 50%;
height: max-content;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`

export const UpdateButton = styled.button`
border-radius: 5px;
width: 20%;
border: 0px;
background-color: green;
margin: 5px;
color: white;
transition: all 0.3s;

&:hover {
  background-color: rgb(0, 58, 0);
}
`

export const Avatars = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-bottom: 10px;
`

export const H1Propio = styled.h1`
font-size: 18px;
`

export const PropioP = styled.p`
font-size: 14px;
`
