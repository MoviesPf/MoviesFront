import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { Signin } from './views/Signin/Signin';
import Profile from './views/Profile/Profile';
import { Detail } from './views/Detail/Detail';
import Login from './views/Login/Login';
import { Home } from './views/Home/Home';
import Donation from './views/Donation/Donation';
import About from './views/About/About';
import {
  DetailPrograms,
  DetailReviews,
  DetailUsers,
  Donations,
  Form,
  Nav,
  Programs,
  Reviews,
  Start,
  Users
} from './Admin/index';
import  Cloudinary  from './views/Profile/Cloudinary/Cloudinary';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/detail/:ProgramsId' element={<Detail />} />
        <Route path='/donate' element={<Donation />} />
        <Route path='/about' element={<About />} />
        <Route path='/cloudinary' element={<Cloudinary />} />

        {/* rutas Admin Dashboard */}
          <Route path='admin' element={<Start />}>
          <Route path='users' element={<Users />} />
          <Route path='users/:id' element={<DetailUsers />} />
          <Route path='reviews' element={<Reviews />} />
          <Route path='reviews/:ReviewsId' element={<DetailReviews />} />
          <Route path='programs' element={<Programs />} />
          <Route path='programs/:ProgramsId' element={<DetailPrograms />} />
          <Route path='create' element={<Form />} />
          <Route path='donations' element={<Donations />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
