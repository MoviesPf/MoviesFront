import styled from 'styled-components'

const UserBarr = styled.div`
height: 100%;
width: 100%;
display: flex;
`

const UserNameContainer = styled.div`
font-size: 2rem;
color: #000;
font-weight: bold;
margin-left: 20rem;
position: relative;
bottom: 8rem;
`

const UserStatusContainer = styled.div`
color: #000;
font-size: 1.5rem;
margin-left: 20rem;
position: relative;
bottom: 8rem;
`

const UserPicture = styled.img` 
position: absolute;
bottom: 5.5rem;
border-radius: 50%;
outline: 2px solid #fff;
padding: .2rem;
background: #000;
height: 200px;
`

const UserCard = styled.div` 
height: 100%;
// display: flex;
margin-left: 120px;
`

const PresentationLine = ({ avatar, name, status }) => {

    return (
        <UserBarr>
            <UserCard>
                <UserPicture src={avatar} />
                <UserNameContainer>
                    <h1>{name}</h1>
                </UserNameContainer>
                <UserStatusContainer>
                    <p>{status}</p>
                </UserStatusContainer>
            </UserCard>
        </UserBarr>
    );
};
export default PresentationLine;