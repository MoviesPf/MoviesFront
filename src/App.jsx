import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, useParams } from 'react-router-dom';
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
<<<<<<< HEAD
import ProtectedRoute from './utils/ProtectedRoute';
import { useSelector } from 'react-redux';
=======
import  Cloudinary  from './views/Profile/Cloudinary/Cloudinary';
>>>>>>> 381cf11e4e24911ce954f6e712e5e1ed1440deb5

function App() {
  const path = useParams();
  console.log(path);
  const user = useSelector((state) => state.user);
  console.log(user);

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
        <Route element={<ProtectedRoute canActivate={true} />}>
          <Route path='admin' element={<Start />}>
            <Route path='users' element={<Users />} />
            <Route path='users/detail/:id' element={<DetailUsers />} />
            <Route path='reviews' element={<Reviews />} />
            <Route
              path='reviews/detail/:ReviewsId'
              element={<DetailReviews />}
            />
            <Route path='programs' element={<Programs />} />
            <Route
              path='progeamas/detail/:ProgramsId'
              element={<DetailPrograms />}
            />
            <Route path='create' element={<Form />} />
            <Route path='donations' element={<Donations />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
