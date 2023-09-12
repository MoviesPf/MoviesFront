import { Outlet } from 'react-router-dom';
import Nav from '../AdminNav/AdminNav';
import style from './Start.module.css'

const Start = () => {
  return (
    <div>
      <Nav/>
      <Outlet/>
    </div>
  )
}

export default Start;