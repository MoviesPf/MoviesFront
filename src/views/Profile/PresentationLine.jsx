import styled from 'styled-components'
import boinaImg from "../../assets/User icons/boinaVerde.png"
import bIcon from "../../assets/User icons/NoEsUnPepino.png"
import { useSelector } from 'react-redux';
const UserBarr = styled.div` 
background-color: 1C1C1C;
position: relative;
align-items: center;
height: max-content;
display: flex;
width: 100%;
z-index: 2;
`


const UserNameContainer = styled.div`
margin-right: 20px;
margin-left: 20px;
height: max-content;
width: 80%;
display: flex;
color: white;
flex-direction: column;
z-index: 2;
`

const NameAndNickname = styled.div`
width: 100%;
flex-direction: column;
align-items: flex-start;
flex-wrap: nowrap;
justify-content: flex-start;
`

const NameAndIcon = styled.div`
width: 100%;
display: flex;
flex-wrap: nowrap;
position: relative;
justify-content: flex-start;
align-items: center;
`

const AliasAndNick = styled.div`
display: flex;
font-size: 10px;
flex-direction: row;
align-items: center;
`
const Alias = styled.h1`
margin-right: 10px;
font-size: 17px;
color: #288858;
`
const Name = styled.h1`
margin: 0;
color: #ffffff;
`

const Background = styled.div`
border: 5px solid;
border-color: white;
position: relative;

border-radius: 100%;
background-color: black;
position: relative;
margin-left: 50px;
top: -95px;
`

const UserCard = styled.div` 
height: 100%;
// display: flex;
margin-left: 120px;
`
const Boina = styled.img`
border-radius: 100%;
height: 250px;
width: 280px;
position: absolute;
left: -10px;
top: -120px;
`
const UserPicture = styled.img`
border-radius: 100%;
height: 250px;
width: 250px;
`
const BoinaIcon = styled.img`
height: 50px;
margin-left: 10px;
width: 50px;

`

const PresentationLine = ({avatar,name,nickname,status}) => {
    
    const user = useSelector((state) => state.user);
    return (
        <UserBarr>
            

            <Background>
            <Boina src={boinaImg} style={user.donator?{visibility:"visible"}:{visibility:"hidden"}}/>
            <UserPicture src={avatar}/>
            </Background>

            <UserNameContainer>
                <NameAndNickname>

                    <NameAndIcon>
                    <Name >{name}</Name >
                    <BoinaIcon src={bIcon} style={user.donator?{visibility:"visible"}:{visibility:"hidden"}}/>
                    </NameAndIcon>

                    <AliasAndNick>
                        <Alias>Alias:</Alias>
                        <h6>{nickname}</h6>
                    </AliasAndNick>
                </NameAndNickname>
                <p>{status}</p>
            </UserNameContainer>
        </UserBarr>
    );
};
export default PresentationLine;