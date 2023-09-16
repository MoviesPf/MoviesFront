import { UserBarr, UserNameContainer, NameAndNickname, AliasAndNick, Alias, Background, UserPicture } from "./UserData.Styled"

export const UserData = ({avatar,name,nickname,status}) => {

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