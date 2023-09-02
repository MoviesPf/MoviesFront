import styled from 'styled-components'

const UserBarr = styled.div` 
background-color: #1C1C1C;
width: 100%;
height: 120px;
display: flex;
position: relative;
z-index: 2;
`
const UserNameContainer = styled.div` 
display: flex;
color: white;
margin-left: 220px;
position: relative;
flex-direction: column;
z-index: 2;
`
const UserPicture = styled.img` 
position: absolute;
top: -95px;
border-radius: 300px;
height: 200px;
`
const UserCard = styled.div` 
display: flex;
margin-left: 120px;

`
const PresentationLine = ({avatar,name,status}) => {

    return (
        <UserBarr>
            <UserCard>
                <UserPicture src={avatar}/>
                <UserNameContainer>
                    <h1>{name}</h1>
                    <p>{status}</p>
                </UserNameContainer>
            </UserCard>
        </UserBarr>
    );
};
export default PresentationLine;