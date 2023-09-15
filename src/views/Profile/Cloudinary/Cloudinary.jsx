import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "../../../Redux/actions";

const Cloudinary = () => {
    const [uploadedAvatar, setUploadedAvatar] = useState(null);
    const [uploadedBackground, setUploadedBackground] = useState(null);

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const openCloudinaryWidget = (imageType) => {
        const cloudName = "greenscreenpf"; // Reemplaza con tu cloudName de Cloudinary
        const uploadPreset = "presentNamepf"; // Reemplaza con tu uploadPreset de Cloudinary

        // Configura el widget de Cloudinary con diferentes opciones según el tipo de imagen
        const widgetOptions = {
            cloudName: cloudName,
            uploadPreset: uploadPreset,
            sources: [
                "local",
                "url",
                "camera",
                "image_search",
                "google_drive",
                "facebook",
                "dropbox",
                "instagram",
                "shutterstock",
                "istock",
                "unsplash",
                "getty"
            ],
            googleApiKey: "<image_search_google_api_key>",
            showAdvancedOptions: true,
            cropping: true,
            multiple: false,
            defaultSource: "local",
            styles: {
                palette: {
                    window: "#000000",
                    sourceBg: "#000000",
                    windowBorder: "#8E9FBF",
                    tabIcon: "#FFFFFF",
                    inactiveTabIcon: "#8E9FBF",
                    menuIcons: "#19D576",
                    link: "#19D576",
                    action: "#336BFF",
                    inProgress: "#19D576",
                    complete: "#1DFD8C",
                    error: "#EA2727",
                    textDark: "#000000",
                    textLight: "#FFFFFF"
                },
                fonts: {
                    default: null,
                    "sans-serif": {
                        url: null,
                        active: true
                    }
                }
            }
        };

        // Abre el widget de Cloudinary y maneja el resultado según el tipo de imagen
        const myWidget = window.cloudinary.createUploadWidget(widgetOptions, (error, result) => {
            if (!error && result && result.event === "success") {
                if (imageType === "avatar") {
                    // Cuando la carga de la imagen de avatar es exitosa, actualiza el estado local
                    setUploadedAvatar(result.info.secure_url);
                } else if (imageType === "background") {
                    // Cuando la carga de la imagen de fondo es exitosa, actualiza el estado local
                    setUploadedBackground(result.info.secure_url);
                }

                if (user[imageType]) {
                    // Si la imagen ya existe, llama a modifyImage en lugar de uploadImage
                    dispatch(modifyImage(user.id, result.info.secure_url, imageType));
                } else {
                    dispatch(uploadImage(user.id, result.info.secure_url, imageType));
                }
            }
        });

        // Abre el widget de Cloudinary
        myWidget.open();
    };

    return (
        <div>
            <div>
                <button onClick={() => openCloudinaryWidget("avatar")}>
                    Cargar Avatar
                </button>
                {uploadedAvatar && (
                    <div>
                        <p>Imagen de Avatar Cargada:</p>
                        <img src={uploadedAvatar} alt="Avatar" />
                    </div>
                )}
            </div>
            <div>
                <button onClick={() => openCloudinaryWidget("background")}>
                    Cargar Background
                </button>
                {uploadedBackground && (
                    <div>
                        <p>Imagen de Background Cargada:</p>
                        <img src={uploadedBackground} alt="Background" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cloudinary;
