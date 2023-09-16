import { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadAvatar, uploadBackground } from "../../../Redux/actions";


const Cloudinary = () => {
  const [uploadedAvatar, setUploadedAvatar] = useState(null);
  const [uploadedBackground, setUploadedBackground] = useState(null);

  const user = JSON.parse(localStorage.getItem("userStorage"))
  const dispatch = useDispatch();

  const openCloudinaryWidget = (imageType) => {
    const cloudName = "greenscreenpf";
    const uploadPreset = "presentNamepf";

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
            const imageUrl = result.info.url;
            console.log(imageUrl)
            if (imageType === "avatar") {
              setUploadedAvatar(imageUrl);
              dispatch(uploadAvatar(user.id, imageUrl)); // Llama a la acción para subir la imagen de avatar
            } else if (imageType === "background") {
              setUploadedBackground(imageUrl);
              dispatch(uploadBackground(user.id, imageUrl)); // Llama a la acción para subir la imagen de fondo
            }
          }
        });
    // Abre el widget de Cloudinary
    myWidget.open();
  };

  return (
    <div>
      <button onClick={() => openCloudinaryWidget("avatar")}> Avatar</button>
      {uploadedAvatar && (
        <div>
          <img src={uploadedAvatar} alt="Avatar" />
        </div>
      )}
      <button onClick={() => openCloudinaryWidget("background")}> Background</button>
      {uploadedBackground && (
        <div>
          <img src={uploadedBackground} alt="Fondo" />
        </div>
      )}
    </div>
  );
};

export default Cloudinary;
