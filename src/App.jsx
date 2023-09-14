import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Route, Routes } from 'react-router-dom';
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
import ProtectedRoute from './utils/ProtectedRoute';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.user)
  console.log(user)

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

        {/* rutas Admin Dashboard */}
<<<<<<< HEAD
        <Route element={<ProtectedRoute canActivate={true}/>}>
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
=======
          <Route path='admin' element={<Start />}>
          <Route path='users' element={<Users />} />
          <Route path='users/:id' element={<DetailUsers />} />
          <Route path='reviews' element={<Reviews />} />
          <Route path='reviews/:ReviewsId' element={<DetailReviews />} />
          <Route path='programs' element={<Programs />} />
          <Route path='programs/:ProgramsId' element={<DetailPrograms />} />
          <Route path='create' element={<Form />} />
          <Route path='donations' element={<Donations />} />
>>>>>>> 74885b8d24b3d0f9812dcb0a6ab8d789c9a36faa
        </Route>
      </Routes>
    </>
  );
}

export default App;
