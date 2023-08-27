import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

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
      <div className='cards'>
       <h1>HOLA MUNDO</h1>
      </div>
    </>
  )
}

export default App
