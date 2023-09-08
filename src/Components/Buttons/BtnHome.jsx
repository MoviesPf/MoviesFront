import { useNavigate } from 'react-router-dom';
import { BiSolidCameraMovie } from 'react-icons/bi';
import css from './BtnHome.module.css'

const BtnHome = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate('/')} className={css.logo}>
      <BiSolidCameraMovie className={css.icon2} />
      <p>GreenScreen</p>
    </div>
  );
};

export default BtnHome;
