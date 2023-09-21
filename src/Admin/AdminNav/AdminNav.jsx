import style from './AdminNav.module.css';
import BtnHome from '../../Components/Buttons/BtnHome';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const [active, setActive] = useState('');
  const navigate = useNavigate();

  const handlerClick = (route) => {
    setActive(route);
    navigate(`/admin/${route}`);
  };
  return (
    <div className={style.container}>
      <BtnHome className={style.home} />
     
      <div
        className={active === 'users' ? style.active : style.button}
        onClick={() => handlerClick('users')}
      >
        Users
      </div>
    
    </div>
  );
};

export default Nav;
