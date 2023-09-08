import { useEffect, useState } from 'react';
import css from './Login.module.css';
import { BiSolidCameraMovie } from 'react-icons/bi';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';
import { useDispatch, useSelector } from 'react-redux';
import { createUsers, loginUser, resetMessage } from '../../Redux/actions';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const message = useSelector((state) => state.message);

  // Configuracion de AUTH
  const clientId =
    '999804940641-tot1597ldrpej0q6vf7khjsg5ak3buhl.apps.googleusercontent.com';

  useEffect(() => {
    if (user.name) {
      navigate('/');
    }
    const start = () => {
      gapi.auth2.init({
        clientId
      });
    };
    gapi.load('client:auth2', start);

    return () => {
      dispatch(resetMessage());
    };
  }, [user]);

  const onSuccess = ({ profileObj }) => {
    //guardar los datos de la sesion en el local
    console.log(profileObj);

    const data = {
      nickname: profileObj.givenName,
      email: profileObj.email,
      name: profileObj.name,
      avatar: profileObj.imageUrl,
      source: "gmail"
    }

    dispatch(createUsers(data));

    // navigate('/');
  };

  const onFailure = () => {
    console.log('fail');
  };

  /////////////////////////////////////////////////////////////////
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    dispatch(loginUser(email, password));

    if (user.name) {
      navigate('/');
    } else {
    }
  };

  return (
    <div className={css.section}>
      <div className={css.logo}>
        <Link to='/'>
          <BiSolidCameraMovie className={css.icon2} />
          <h3>GreenScreen</h3>
        </Link>
      </div>
      <div className={css.txt}>
        <h1>Welcome!</h1>
        <p>
          Welcome to GreenScreen! Here you can find reviews and movie ratings.
          You can search for movies by genre, release date release date, artist.
        </p>
      </div>
      <div className={css.login}>
        <h1>LOGIN</h1>

        <form onSubmit={handleSubmit} className={css.form}>
          {message === 'Incorrect password' || 'Incorrect password or email' ? (
            <span className={css.errorLogin}>{message}</span>
          ) : (
            ''
          )}
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
          <button type='submit' className={css.btn}>
            Login
          </button>
        </form>

        <span className={css.span}>
          Create account?
          <NavLink to='/signin' className={css.singin}>
            Sing in
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
