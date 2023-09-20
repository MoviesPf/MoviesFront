import styled from 'styled-components';

export const CardContainer = styled.div`
border-radius: 30px;
background-color: #131212;
height: auto;
width: 90%;
display: flex;
flex-direction: row;
padding-top: 20px;
padding-bottom: 20px;
margin-bottom: 30px;
margin-top: 30px;
`

export const MoviePoster = styled.img`
margin-left: 30px;
border-radius: 30px;
height: 250px;
    &:hover {
        transform: scale(1.05);
    }
`

export const DetailContainer = styled.div`
padding-right: 30px;
height: auto;
width: 100%;
display: flex;
margin-left: 30px;
position: relative;
flex-direction: column;
justify-content: space-between;
`

export const ContextRow = styled.div`
padding-bottom: 10px;
justify-content: space-between;
flex-direction: row;
align-items: center;
height: auto;
display: flex;
`

export const Title = styled.label`
height: auto;
display: flex;
color: white;
font-size: 40px;
position: relative;
`

export const MovieData = styled.label`
height: auto;
display: flex;
color: white;
font-size: 20px;
position: relative;  
`

export const StarsRow = styled.div`
padding-right: 20px;
height: auto;
display: flex;
color: white;
margin-top: 5px;
margin-bottom: 5px;
font-size: 20px;
position: relative;
flex-direction: row;
justify-content: end;
`

export const OverviewText = styled.div`
height: auto;
display: flex;
color: white;
font-size: 20px;
position: relative;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: justify;
`

export const ButtonFullComments = styled.label`
margin-top: 10px;
width: max-content;
border-radius: 5px;
background: transparent;
color: rgb(25, 213, 118);
background: #6161611c;
font-size: 13px;
font-weight: bold;
transition: 0.2s;
padding: 2px 5px;
cursor: pointer;
&:hover {
  color: #1b1b1b;
  background: rgb(25, 213, 118);
}
`;