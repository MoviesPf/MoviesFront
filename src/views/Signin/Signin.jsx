import { useState } from 'react';
import css from './Signin.module.css';
import { useDispatch } from 'react-redux';
import {
  caballoAvatar,
  conejoAvatar,
  elefanteAvatar,
  gatoAvatar,
  gatoBodyAvatar,
  leonAvatar,
  monoBodyAvatar,
  osoAvatar,
  osoBodyAvatar,
  perroBodyAvatar,
  rinoceronteBodyAvatar,
  tigreAvatar,
  unicornioAvatar,
  zorroAvatar,
  zorroBodyAvatar
} from './Images';
import { useNavigate } from 'react-router-dom';
import { createUsers } from '../../Redux/actions';
import BtnHome from '../../Components/Buttons/BtnHome';
import { validations } from './validations';

export const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    nickname: '',
    avatar: 'https://i.ibb.co/4KWqYTS/user-removebg-preview-1.png',
    email: '',
    password: '',
    confirm: ''
  });

  const [error, setError] = useState({});

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
    setError(
      validations({
        ...user,
        [event.target.name]: event.target.value
      })
    );
    console.log(error);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    dispatch(createUsers(user));
    navigate('/');
  };

  return (
    <div className={css.background}>
      <form className={css.form} onSubmit={handleSubmit}>
        <BtnHome className={css.btnHome} />

        <h1 className={css.title}>SIGN UP</h1>

        <div className={css.section}>
          <div className={css.formUser}>
            <div className={css.avatarUser}>
              <img
                className={css.avatarUserImg}
                src={user.avatar}
                alt='avatar'
              />
            </div>

            <label className={css.label}>
              Name <span className={css.span}>*</span>
              <input
                onChange={handleChange}
                value={user.name}
                autoComplete='none'
                className={css.input}
                placeholder='Name'
                type='text'
                name='name'
              />
              {error.name && <span>{error.name}</span>}
            </label>

            <label className={css.label}>
              Nickname <span className={css.span}>*</span>
              <input
                onChange={handleChange}
                value={user.nickname}
                autoComplete='none'
                className={css.input}
                placeholder='Nickname'
                type='text'
                name='nickname'
              />
              {error.nickname && <span>{error.nickname}</span>}
            </label>

            <label className={css.label}>
              Email <span className={css.span}>*</span>
              <input
                onChange={handleChange}
                value={user.email}
                autoComplete='none'
                className={css.input}
                placeholder='Email'
                type='email'
                name='email'
              />
              {error.email && <span>{error.email}</span>}
            </label>

            <label className={css.label}>
              Password <span className={css.span}>*</span>
              <input
                onChange={handleChange}
                value={user.password}
                autoComplete='none'
                className={css.input}
                placeholder='Password'
                type='password'
                name='password'
              />
              {error.password && <span>{error.password}</span>}
            </label>

            <label className={css.label}>
              Confirm Password <span className={css.span}>*</span>
              <input
                onChange={handleChange}
                value={user.confirm}
                autoComplete='none'
                className={css.input}
                placeholder='Confirm Password'
                type='password'
                name='confirm'
              />
              {error.confirm && <span>{error.confirm}</span>}
            </label>
          </div>
        </div>

        <div className={css.containBtn}>
          <div className={css.policy}>
            <input className={css.checkbox} type='checkbox' name='policy' />
            <p>I agree to the Terms and Privacy Policy</p>
          </div>

          <button type='submit' className={css.btn}>
            Sign up
          </button>
        </div>

        <div className={css.sectionAvatar}>
          <p className={css.titleAvatar}>Choose your avatar</p>

          <div
            className={css.avatarContainer}
            onClick={() =>
              setUser({
                ...user,
                avatar: caballoAvatar
              })
            }
          >
            <img className={css.avatarImg} src={caballoAvatar} alt='avatar' />
          </div>

          <div
            className={css.avatarContainer}
            onClick={() =>
              setUser({
                ...user,
                avatar: conejoAvatar
              })
            }
          >
            <img className={css.avatarImg} src={conejoAvatar} alt='avatar' />
          </div>

          <div
            className={css.avatarContainer}
            onClick={() =>
              setUser({
                ...user,
                avatar: gatoBodyAvatar
              })
            }
          >
            <img className={css.avatarImg} src={gatoBodyAvatar} alt='avatar' />
          </div>

          <div
            className={css.avatarContainer}
            onClick={() =>
              setUser({
                ...user,
                avatar: monoBodyAvatar
              })
            }
          >
            <img className={css.avatarImg} src={monoBodyAvatar} alt='avatar' />
          </div>

          <div
            className={css.avatarContainer}
            onClick={() =>
              setUser({
                ...user,
                avatar: osoBodyAvatar
              })
            }
          >
            <img className={css.avatarImg} src={osoBodyAvatar} alt='avatar' />
          </div>

          <div
            className={css.avatarContainer}
            onClick={() =>
              setUser({
                ...user,
                avatar: perroBodyAvatar
              })
            }
          >
            <img className={css.avatarImg} src={perroBodyAvatar} alt='avatar' />
          </div>

          <div
            className={css.avatarContainer}
            onClick={() =>
              setUser({
                ...user,
                avatar: rinoceronteBodyAvatar
              })
            }
          >
            <img
              className={css.avatarImg}
              src={rinoceronteBodyAvatar}
              alt='avatar'
            />
          </div>

          <div
            className={css.avatarContainer}
            onClick={() =>
              setUser({
                ...user,
                avatar: zorroBodyAvatar
              })
            }
          >
            <img className={css.avatarImg} src={zorroBodyAvatar} alt='avatar' />
          </div>

          <div
            className={css.avatarContainer}
            onClick={() =>
              setUser({
                ...user,
                avatar: elefanteAvatar
              })
            }
          >
            <img className={css.avatarImg} src={elefanteAvatar} alt='avatar' />
          </div>

          <div
            className={css.avatarContainer}
            onClick={() =>
              setUser({
                ...user,
                avatar: gatoAvatar
              })
            }
          >
            <img className={css.avatarImg} src={gatoAvatar} alt='avatar' />
          </div>

          <div
            className={css.avatarContainer}
            onClick={() =>
              setUser({
                ...user,
                avatar: leonAvatar
              })
            }
          >
            <img className={css.avatarImg} src={leonAvatar} alt='avatar' />
          </div>

          <div
            className={css.avatarContainer}
            onClick={() =>
              setUser({
                ...user,
                avatar: osoAvatar
              })
            }
          >
            <img className={css.avatarImg} src={osoAvatar} alt='avatar' />
          </div>

          <div
            className={css.avatarContainer}
            onClick={() =>
              setUser({
                ...user,
                avatar: tigreAvatar
              })
            }
          >
            <img className={css.avatarImg} src={tigreAvatar} alt='avatar' />
          </div>

          <div
            className={css.avatarContainer}
            onClick={() =>
              setUser({
                ...user,
                avatar: unicornioAvatar
              })
            }
          >
            <img className={css.avatarImg} src={unicornioAvatar} alt='avatar' />
          </div>

          <div
            className={css.avatarContainer}
            onClick={() =>
              setUser({
                ...user,
                avatar: zorroAvatar
              })
            }
          >
            <img className={css.avatarImg} src={zorroAvatar} alt='avatar' />
          </div>
        </div>
      </form>
    </div>
  );
};
