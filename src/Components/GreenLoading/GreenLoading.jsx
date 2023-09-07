import css from "./GreenLoading.module.css"
import gif from "../../assets/loading.gif"

export const GreenLoading = () => {
  return (
    <div className={css.contenedor}>
      <img src={gif}alt="Loading"/>
    </div>
  );
};