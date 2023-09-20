import { UserBarr, UserNameContainer, NameAndIcon, NameAndNickname, AliasAndNick, Alias, Background, UserPicture, Boina, BoinaIcon, Name} from "./UserData.Styled"

import boinaImg from "../../../assets/Usericons/boinaVerde.png"
import bIcon from "../../../assets/Usericons/NoEsUnPepino.png"

export const UserData = ({user}) => {

    return (
        <UserBarr>

            <Background>
                <Boina src={boinaImg} style={user?.donator?{visibility:"visible"}:{visibility:"hidden"}}/>
                <UserPicture src={user.avatar}/>
            </Background>

            <UserNameContainer>
                <NameAndNickname>
                    <NameAndIcon>
                        <Name>{user?.name}</Name>
                        <BoinaIcon src={bIcon} style={user?.donator?{visibility:"visible"}:{visibility:"hidden"}}/>
                    </NameAndIcon>
                    
                    <AliasAndNick>
                        <Alias>Alias:</Alias>
                        <h1>{user?.nickname}</h1>
                    </AliasAndNick>
                </NameAndNickname>
                <p>{user?.status ? user.status : "Movies Fan!!"}</p>
            </UserNameContainer>
        </UserBarr>
    );
};