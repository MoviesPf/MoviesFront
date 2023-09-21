import { UserBarr, UserNameContainer, NameAndIcon, NameAndNickname, AliasAndNick, Alias, Background, UserPicture, Boina, BoinaIcon, Name} from "./UserData.Styled"

import BoinaImagen from "../../../assets/User/Boina.png"
import Pepino from "../../../assets/User/Pepino.png"

export const UserData = ({user}) => {

    return (
        <UserBarr>

            <Background>
                <Boina src={BoinaImagen} style={user?.donator?{visibility:"visible"}:{visibility:"hidden"}}/>
                <UserPicture src={user.avatar}/>
            </Background>

            <UserNameContainer>
                <NameAndNickname>
                    <NameAndIcon>
                        <Name>{user?.name}</Name>
                        <BoinaIcon src={Pepino} style={user?.donator?{visibility:"visible"}:{visibility:"hidden"}}/>
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