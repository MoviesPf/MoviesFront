import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { Signin } from './views/Signin/Signin';
import Profile from './views/Profile/Profile';
import { Detail } from './views/Detail/Detail';
import Login from './views/Login/Login';
import { Home } from './views/Home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/detail/:ProgramsId" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
