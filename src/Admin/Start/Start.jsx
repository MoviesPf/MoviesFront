import { Outlet, useLocation } from 'react-router-dom';
import Nav from '../AdminNav/AdminNav';
import Welcome from '../Welcome/Welcome';
import { useDispatch } from 'react-redux';
import { getUsersAdmin } from '../../Redux/actions';
import { useEffect } from 'react';

const Start = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsersAdmin())
  }, [])
  const path = useLocation().pathname
  console.log(path)

  return (
    <>
      <Nav />
      { path ==='/admin' ?  
      <Welcome /> 
      :
      <Outlet />
      }
    </>
  )
};

export default Start;