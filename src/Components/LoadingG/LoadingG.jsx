import style from "./LoadingG.module.css"
import gif from "../../assets/loading.gif"

export const LoadingG = () => {
  return (
    <div className={style.contenedor}>
      <img src={gif}alt="loading"/>
    </div>
  );
};