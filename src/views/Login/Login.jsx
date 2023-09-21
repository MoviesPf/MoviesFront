import { useEffect, useState } from 'react';
import css from './Login.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';
import { useDispatch, useSelector } from 'react-redux';
import {
  createUsers,
  loginUser,
  resetMessage,
  resetUserData
} from '../../Redux/actions';
import BtnHome from '../../Components/Buttons/BtnHome';
import { useLocalStorage } from '../../utils/useLocalStorage.js';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const message = useSelector((state) => state.message);

  // Configuracion de AUTH
  const clientId =
    '999804940641-tot1597ldrpej0q6vf7khjsg5ak3buhl.apps.googleusercontent.com';

  useEffect(() => {
    const start = () => {
      if (user.id && !user.banned) {
        navigate('/');
      }

      if (!user?.banned && !modal) {
        setModal(true);
        console.log(message, modal);
      }

      gapi.auth2.init({
        clientId
      });
    };
    gapi.load('client:auth2', start);

    return () => {
      if (user.banned) {
        dispatch(resetUserData());
        // setUser
      }
      dispatch(resetMessage());
    };
  }, [user]);

  const onSuccess = ({ profileObj }) => {
    const data = {
      nickname: profileObj.givenName,
      email: profileObj.email,
      name: profileObj.name,
      avatar: profileObj.imageUrl,
      source: 'gmail'
    };

    console.log(data);
    dispatch(createUsers(data));

    if (user.id && !user.banned) {
      navigate('/');
    } else if (user.banned) {
      setModal(true);
    }
  };

  const onFailure = () => {
    console.log('fail');
  };

  /////////////////////////////////////////////////////////////////
  const [email, setEmail] = useLocalStorage('text', ' ');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    dispatch(loginUser(null, email, password));

    if (user.id && !user.banned) {
      navigate('/');
    } else if (user.banned) {
      setModal(true);
    }
  };

  const [modal, setModal] = useState(false);

  return (
    <div className={css.section}>
      {user?.banned && modal ? (
        <div className={css.modalBanned}>
          <div className={css.modalDiv}>
            <p className={css.modalText}>
              We regret to inform you that your account has been suspended for
              violating the rules of our site, <span>check your email or contact us</span>.
            </p>
            <div
              className={css.modalBtn}
              onClick={() => {
                setModal(false);
                navigate('/')
              }}
            >
              Accept
            </div>
          </div>
        </div>
      ) : (
        ''
      )}

      <BtnHome />
      <div className={css.txt}>
        <div className={css.bigTitle}>Welcome!</div>
        <p className={css.hiddenText}>
          Welcome to GreenScreen! Here you can find reviews and movie ratings.
          You can search for movies by genre, release date release date, artist.
        </p>
      </div>
      <div className={css.login}>
        <h1>SIGN IN</h1>

        <form onSubmit={handleSubmit} className={css.form}>
          <div className={css.form_group}>
            <input
              placeholder='Email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={css.form_group2}>
            <input
              placeholder='Password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {message === 'Incorrect password' ||
          message === 'Incorrect password or email' ? (
            <span className={css.errorLogin}>{message}</span>
          ) : (
            ''
          )}
          <button type='submit' className={css.btn}>
            Login
          </button>
        </form>

        <span className={css.span}>
          Create account?
          <NavLink to='/signin' className={css.singin}>
            Sing up
          </NavLink>
        </span>

        <div className={css.or}>
          <span className={css.line}></span>
          <span className={css.textOr}>OR</span>
          <span className={css.line}></span>
        </div>

        <div className={css.auth}>
          <p>Use your email for registration</p>

          <GoogleLogin
            className={css.authGoogle}
            buttonText='Login with Google'
            clientId={clientId}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy='single_host_policy'
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
