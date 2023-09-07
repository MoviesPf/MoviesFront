import css from "./LoadingGif.module.css"
import gif from "../../assets/loading.gif"

export const LoadingGif = () => {
  return (
    <div className={css.contenedor}>
      <img src={gif}alt="Loading"/>
    </div>
  );
};