import style from "./Loading.module.css"
import gif from "../../assets/loading.gif"

const LoadingG = () => {
  return (
    <div className={style.contenedor}>
      <img src={gif}alt="loading"/>
    </div>
  )
}

export default LoadingG