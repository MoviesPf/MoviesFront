import styled from 'styled-components'

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
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`
const AliasAndNick = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`
const Alias = styled.h1`
margin-right: 10px;
color: green;
`

const Background = styled.div`
border: 5px solid;
border-color: white;
border-radius: 100%;
background-color: black;
position: relative;
margin-left: 50px;
top: -95px;

`
const UserPicture = styled.img`
border-radius: 100%;
height: 250px;
width: 250px;
`

const PresentationLine = ({avatar,name,nickname,status}) => {

    return (
        <UserBarr>
            <Background>
            <UserPicture src={avatar}/>
            </Background>
            <UserNameContainer>
                <NameAndNickname>
                    <h1>{name}</h1>
                    <AliasAndNick>
                        <Alias>Alias:</Alias>
                        <h1>{nickname}</h1>
                    </AliasAndNick>
                </NameAndNickname>
                <p>{status}</p>
            </UserNameContainer>
        </UserBarr>
    );
};
export default PresentationLine;