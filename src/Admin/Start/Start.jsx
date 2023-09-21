import { Outlet, useLocation } from 'react-router-dom';
import Nav from '../AdminNav/AdminNav';
import Welcome from '../Welcome/Welcome';
import { useDispatch } from 'react-redux';
import { getUsersAdmin } from '../../Redux/actions';
import { useEffect } from 'react';
import style from './Start.module.css'

const Start = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsersAdmin())
  }, [])
  const path = useLocation().pathname
  console.log(path)

  return (
    <div className={style.contain}>
      <Nav />
      { path ==='/admin' ?  
      <Welcome /> 
      :
      <Outlet />
      }
    </div>
  )
};

export default Start;