// import React, { useState, useEffect } from "react";

// const CloudinaryUploadWidget = () => {
//     const [uploadedImage, setUploadedImage] = useState(null);

//     useEffect(() => {
//         const cloudName = "tu-cloud-name"; // Reemplaza con tu cloudName de Cloudinary
//         const uploadPreset = "tu-upload-preset"; // Reemplaza con tu uploadPreset de Cloudinary

//         // Crea una instancia del widget de Cloudinary
//         const myWidget = window.cloudinary.createUploadWidget(
//             {
//                 cloudName: cloudName,
//                 uploadPreset: uploadPreset,
//                 // Puedes configurar más opciones aquí según tus necesidades
//             },
//             (error, result) => {
//                 if (!error && result && result.event === "success") {
//                     // Cuando la carga de la imagen es exitosa, actualiza el estado con la URL de la imagen
//                     setUploadedImage(result.info.secure_url);
//                 }
//             }
//         );

//         // Agrega un evento clic al botón para abrir el widget de Cloudinary
//         document.getElementById("upload_widget").addEventListener(
//             "click",
//             function () {
//                 myWidget.open();
//             },
//             false
//         );

//         // Elimina el evento al desmontar el componente para evitar problemas de memoria
//         return () => {
//             document.getElementById("upload_widget").removeEventListener("click", () => { });
//         };
//     }, []);

//     return (
//         <div>
//             <div>
//                 <button id="upload_widget" className="cloudinary-button">
//                     Subir Avatar
//                 </button>
//                 {uploadedImage && (
//                     <div>
//                         <p>Imagen Cargada:</p>
//                         <img src={uploadedImage} alt="Imagen Cargada" />
//                     </div>
//                 )}
//             </div>
//             <div>
//                 <button id="upload_widget" className="cloudinary-button">
//                     Subir Background
//                 </button>
//                 {uploadedImage && (
//                     <div>
//                         <p>Imagen Cargada:</p>
//                         <img src={uploadedImage} alt="Imagen Cargada" />
//                     </div>
//                 )}
//             </div>
//         </div>

//     );
// };

// export default CloudinaryUploadWidget;
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "./redux/actions"; // Asegúrate de importar la acción correcta

const ImageUploadComponent = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const openCloudinaryWidget = (imageType) => {
    const cloudName = "greenscreenpf"; // Reemplaza con tu cloudName de Cloudinary
    const uploadPreset = "presentNamepf"; // Reemplaza con tu uploadPreset de Cloudinary

    // Configura el widget de Cloudinary
    const myWidget = window.cloudinary.openUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
        // Otras opciones de configuración según sea necesario
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          // Cuando la carga de la imagen es exitosa, actualiza el estado local
          setUploadedImage(result.info.secure_url);

          // Llama a la acción uploadImage para cargar la imagen en el servidor
          dispatch(uploadImage(user.id, result.info.secure_url, imageType));
        }
      }
    );

    // Abre el widget de Cloudinary
    myWidget.open();
  };

  return (
    <div>
      <div>
        <button onClick={() => openCloudinaryWidget("avatar")}>
          Cargar Avatar
        </button>
        {uploadedImage && (
          <div>
            <p>Imagen de Avatar Cargada:</p>
            <img src={uploadedImage} alt="Avatar" />
          </div>
        )}
      </div>
      <div>
        <button onClick={() => openCloudinaryWidget("background")}>
          Cargar Background
        </button>
        {uploadedImage && (
          <div>
            <p>Imagen de Background Cargada:</p>
            <img src={uploadedImage} alt="Background" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploadComponent;
