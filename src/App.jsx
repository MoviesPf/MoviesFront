import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import { Home } from './views/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { Signin } from './views/Signin/Signin';
import Profile from './views/Profile/Profile'
import Detail from './views/Detail/Detail'
import Login from './views/Login/Login';

function App() {

  // const [data, setData] = useState([]);

  // // useEffect(() => {
  // //   const fetchData = async () => {
  // //     try {
  // //       const response = await axios.get('http://localhost:3001');

  // //       console.log(response)
  // //       setData(response.data);
  // //     } catch (error) {
  // //       console.error(error);
  // //     }
  // //   }
  // //   fetchData();
  // // }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/detail/:ProgramsId' element={<Detail/>}/>
      </Routes>
    </>
  )
}

export default App
