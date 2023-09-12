import { Outlet } from 'react-router-dom';
import style from './Start.module.css'

const Start = () => {
  return (
    <div>
      <h1>Start</h1>
      <Outlet/>
    </div>
  )
}

export default Start;