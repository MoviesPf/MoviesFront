import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import { Home } from './views/Home/Home';
import { Route, Routes } from 'react-router-dom';
// import Detail from './views/Detail/Detail'

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001');

        console.log(response)
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Routes>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
