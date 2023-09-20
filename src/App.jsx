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
import ProtectedRoute from './utils/ProtectedRoute';
import Error404 from './Components/Error404/Error404';

function App() {
  return (
    <>
      <Routes>
        <Route path='/*' element={<Error404/>} />

        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/detail/:ProgramsId' element={<Detail />}/>
        <Route path='/donate' element={<Donation />} />
        <Route path='/about' element={<About />} />

        {/* rutas Admin Dashboard */}
        <Route element={<ProtectedRoute canActivate={true} />}>
          <Route path='admin' element={<Start />}>
            <Route path='users' element={<Users />} />
            <Route path='users/detail/:id' element={<DetailUsers />}/>
            <Route path='reviews' element={<Reviews />} />
            <Route path='reviews/detail/:ReviewsId' element={<DetailReviews />}/>
            <Route path='programs' element={<Programs />} />
            <Route path='progeamas/detail/:ProgramsId' element={<DetailPrograms />}/>
            <Route path='create' element={<Form />} />
            <Route path='donations' element={<Donations />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
