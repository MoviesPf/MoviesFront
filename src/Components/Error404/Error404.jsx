import { useNavigate } from 'react-router-dom';
import style from './Error404.module.css';

const Error404 = () => {
  const navigate = useNavigate()
  return (
    <div className={style.container}>
      <div className={style.cont}>
        <div className={style.error}>ERROR 404</div>
        <div className={style.text}>
          The page you are looking for does not exist on our website. Please
          check the URL or return to the <br />
          <span onClick={() => navigate('/')} className={style.home}>home page</span>. If you need help,
          please contact us.
        </div>
      </div>
    </div>
  );
};

export default Error404;
