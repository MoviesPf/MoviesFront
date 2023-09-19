import { H1Propio, PropioP, ContainerModalReview, ModalEdit, Fondo, Top, CloseButton, Avatars, Label, Background, UpdateButton, Avatar, Content, TopContent, EditInput, NameStatusAlias, Nick, Alias, AllForm, InputForm, CloudinaryButtons, Form } from "./EditProfileModal.Styled"
import { caballoAvatar, conejoAvatar, elefanteAvatar, gatoAvatar, gatoBodyAvatar, leonAvatar, monoBodyAvatar, osoAvatar, osoBodyAvatar, perroBodyAvatar, rinoceronteBodyAvatar, tigreAvatar, unicornioAvatar, zorroAvatar, zorroBodyAvatar } from '../../Signin/Images'
import defaultBackground from "../../../assets/background.jpg";
import { useState } from "react";
import cloudinaryIcon from "../../../assets/cloudinary.png";
import { useDispatch } from 'react-redux';

import css from "./EditProfile.module.css"
import { updateUser } from "../../../Redux/actions";

export const EditProfileModal = ({ setShowModal }) => {
    const dispatch = useDispatch();

    const user = JSON.parse(localStorage.getItem('userStorage'));

    const [editedUser, setEditedUser] = useState({
        background: user.background,
        avatar: user.avatar,
        name: user.name,
        nickname: user.nickname,
        status: user.status,
    });

    const openCloudinaryWidget = (imageType) => {
        const cloudName = "greenscreenpf";
        const uploadPreset = "presentNamepf";

        const widgetOptions = {
            cloudName: cloudName, uploadPreset: uploadPreset,
            sources: ["local", "url", "camera", "google_drive", "facebook", "dropbox", "instagram", "shutterstock", "istock", "unsplash", "getty"],
            googleApiKey: "<image_search_google_api_key>", showAdvancedOptions: true, cropping: true, multiple: false, defaultSource: "local",
            styles: {
                palette: { window: "#000000", sourceBg: "#000000", windowBorder: "#8E9FBF", tabIcon: "#FFFFFF", inactiveTabIcon: "#8E9FBF", menuIcons: "#19D576", link: "#19D576", action: "#336BFF", inProgress: "#19D576", complete: "#1DFD8C", error: "#EA2727", textDark: "#000000", textLight: "#FFFFFF" },
                fonts: { default: null, "sans-serif": { url: null, active: true } }
            }
        };

        // Abre el widget de Cloudinary y maneja el resultado según el tipo de imagen
        const myWidget = window.cloudinary.createUploadWidget(widgetOptions, (error, result) => {
            if (!error && result && result.event === "success") {
                const imageUrl = result.info.url;
                if (imageType === "avatar") { setEditedUser({ ...editedUser, avatar: imageUrl }); }
                if (imageType === "background") { setEditedUser({ ...editedUser, background: imageUrl }); }
            }
        });
        myWidget.open();
    };

    const showModal = () => {
        setShowModal(false)
    }

    const handleChange = (event) => {
        setEditedUser({
            ...editedUser,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = () => {
        if (user.avatar !== editedUser.avatar || user.background !== editedUser.background || user.name !== editedUser.name || user.nickname !== editedUser.nickname || user.status !== editedUser.status) {
            dispatch(updateUser({ id: user.id, name: editedUser.name, nickname: editedUser.nickname, status: editedUser.status, avatarImage: editedUser.avatar, backgroundImage: editedUser.background }))
        }
    }

    return (
        <ContainerModalReview>
            <ModalEdit>
                <Top>
                    <Fondo src={editedUser.background === "default" ? defaultBackground : editedUser.background}></Fondo>
                    <CloseButton onClick={showModal}> X </CloseButton>
                </Top>
                <Content>
                    <TopContent>
                        <Background src={editedUser.avatar ? editedUser.avatar : user.avatar}>
                            <Avatar src={editedUser.avatar ? editedUser.avatar : user.avatar} />
                        </Background>
                        <NameStatusAlias>
                            <div>
                                <H1Propio>{editedUser.name ? editedUser.name : user.name}</H1Propio>
                                <PropioP>{editedUser.status ? editedUser.status : "Movies Fan!!"}</PropioP>
                            </div>
                            <Alias>
                                <Nick>Alias:</Nick>
                                <H1Propio>{editedUser.nickname ? editedUser.nickname : user.nickname}</H1Propio>
                            </Alias>
                        </NameStatusAlias>
                    </TopContent>

                    <AllForm>
                        <Form>
                            <InputForm>
                                <Label>Name:
                                    <EditInput onChange={handleChange} value={editedUser.name}
                                        autoComplete='none' placeholder='Name' type='text' name='name' />
                                </Label>
                                <Label>Alias:
                                    <EditInput onChange={handleChange} value={editedUser.nickname}
                                        autoComplete='none' placeholder='Alias' type='text' name='nickname' />
                                </Label>
                                <Label>Status:
                                    <EditInput onChange={handleChange} value={editedUser.status}
                                        autoComplete='none' placeholder='Status' type='text' name='status' />
                                </Label>
                                <div>
                                    <label>Background:</label>

                                    <button className={css.button} onClick={() => openCloudinaryWidget("background")}>
                                        <img className={css.imagen} src={cloudinaryIcon}></img>
                                    </button>
                                    or
                                    <button className={css.buttonDefault} onClick={() => setEditedUser({ ...editedUser, background: "default" })}>
                                        Default
                                    </button>
                                </div>
                            </InputForm>
                            <CloudinaryButtons>
                                <label>Avatar: </label>
                                <Avatars>
                                    <div className={css.avatarContainer} onClick={() => setEditedUser({ ...editedUser, avatar: caballoAvatar })}>
                                        <img className={css.avatarImg} src={caballoAvatar} alt='avatar' />
                                    </div>

                                    <div className={css.avatarContainer} onClick={() => setEditedUser({ ...editedUser, avatar: conejoAvatar })}>
                                        <img className={css.avatarImg} src={conejoAvatar} alt='avatar' />
                                    </div>

                                    <div className={css.avatarContainer} onClick={() => setEditedUser({ ...editedUser, avatar: gatoBodyAvatar })}>
                                        <img className={css.avatarImg} src={gatoBodyAvatar} alt='avatar' />
                                    </div>

                                    <div className={css.avatarContainer} onClick={() => setEditedUser({ ...editedUser, avatar: monoBodyAvatar })}>
                                        <img className={css.avatarImg} src={monoBodyAvatar} alt='avatar' />
                                    </div>

                                    <div className={css.avatarContainer} onClick={() => setEditedUser({ ...editedUser, avatar: osoBodyAvatar })}>
                                        <img className={css.avatarImg} src={osoBodyAvatar} alt='avatar' />
                                    </div>

                                    <div className={css.avatarContainer} onClick={() => setEditedUser({ ...editedUser, avatar: perroBodyAvatar })}>
                                        <img className={css.avatarImg} src={perroBodyAvatar} alt='avatar' />
                                    </div>

                                    <div className={css.avatarContainer} onClick={() => setEditedUser({ ...editedUser, avatar: rinoceronteBodyAvatar })}>
                                        <img className={css.avatarImg} src={rinoceronteBodyAvatar} alt='avatar' />
                                    </div>

                                    <div className={css.avatarContainer} onClick={() => setEditedUser({ ...editedUser, avatar: zorroBodyAvatar })}>
                                        <img className={css.avatarImg} src={zorroBodyAvatar} alt='avatar' />
                                    </div>

                                    <div className={css.avatarContainer} onClick={() => setEditedUser({ ...editedUser, avatar: elefanteAvatar })}>
                                        <img className={css.avatarImg} src={elefanteAvatar} alt='avatar' />
                                    </div>

                                    <div className={css.avatarContainer} onClick={() => setEditedUser({ ...editedUser, avatar: gatoAvatar })}>
                                        <img className={css.avatarImg} src={gatoAvatar} alt='avatar' />
                                    </div>

                                    <div className={css.avatarContainer} onClick={() => setEditedUser({ ...editedUser, avatar: leonAvatar })}>
                                        <img className={css.avatarImg} src={leonAvatar} alt='avatar' />
                                    </div>

                                    <div className={css.avatarContainer} onClick={() => setEditedUser({ ...editedUser, avatar: osoAvatar })}>
                                        <img className={css.avatarImg} src={osoAvatar} alt='avatar' />
                                    </div>

                                    <div className={css.avatarContainer} onClick={() => setEditedUser({ ...editedUser, avatar: tigreAvatar })}>
                                        <img className={css.avatarImg} src={tigreAvatar} alt='avatar' />
                                    </div>

                                    <div className={css.avatarContainer} onClick={() => setEditedUser({ ...editedUser, avatar: unicornioAvatar })}>
                                        <img className={css.avatarImg} src={unicornioAvatar} alt='avatar' />
                                    </div>

                                    <div className={css.avatarContainer} onClick={() => setEditedUser({ ...editedUser, avatar: zorroAvatar })}>
                                        <img className={css.avatarImg} src={zorroAvatar} alt='avatar' />
                                    </div>
                                </Avatars>
                                <div>
                                    Upload:
                                    {"   "}
                                    <button className={css.button} onClick={() => openCloudinaryWidget("avatar")}>
                                        <img className={css.imagen} src={cloudinaryIcon}></img>
                                    </button>
                                    Or
                                    <button className={css.buttonDefault} onClick={() => setEditedUser({ ...editedUser, avatar: user.avatar })}>
                                        Reset
                                    </button>
                                </div>
                            </CloudinaryButtons>
                        </Form>
                        <UpdateButton onClick={handleSubmit}> Update Profile </UpdateButton>
                    </AllForm>
                </Content>

            </ModalEdit>
        </ContainerModalReview>
    );
};