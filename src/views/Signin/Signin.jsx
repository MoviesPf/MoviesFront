import { useState } from 'react';
import css from './Signin.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { caballoAvatar, conejoAvatar, elefanteAvatar, gatoAvatar, gatoBodyAvatar, leonAvatar, monoBodyAvatar, osoAvatar, osoBodyAvatar, perroBodyAvatar, rinoceronteBodyAvatar, tigreAvatar, unicornioAvatar, zorroAvatar, zorroBodyAvatar} from './Images';
import { useNavigate } from 'react-router-dom';
import { createUsers } from '../../Redux/actions';
import BtnHome from '../../Components/Buttons/BtnHome';
import { validations } from './validations';

export const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const [createdUser, setCreatedUser] = useState({
    name: '',
    nickname: '',
    avatar: 'https://i.ibb.co/4KWqYTS/user-removebg-preview-1.png',
    email: '',
    password: '',
    confirm: ''
  });

  const [error, setError] = useState({});

  const handleChange = (event) => {
    setCreatedUser({
      ...createdUser,
      [event.target.name]: event.target.value
    });
    setError(
      validations({
        ...createdUser,
        [event.target.name]: event.target.value
      })
    );
    console.log(error);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(createdUser)
    dispatch(createUsers(createdUser)) 

    if(user.id) {
      navigate("/")
    }
  };

  return (
    <div className={css.background}>
      <form className={css.form} onSubmit={handleSubmit}>
        <BtnHome className={css.btnHome} />

        <h1 className={css.title}>SIGN UP</h1>

        <div className={css.section}>
          <div className={css.formUser}>

            <label className={css.label}>
              <div>
                <span> Name </span> <span className={css.span}>*</span>
              </div>
              <input
                onChange={handleChange}
                value={createdUser.name}
                autoComplete='none'
                className={css.input}
                placeholder='Name'
                type='text'
                name='name'
              />
              {error.name && <span className={css.Error}>{error.name}</span>}
            </label>

            <label className={css.label}>
              <div>
                <span> Nickname </span> <span className={css.span}>*</span>
              </div>
              <input
                onChange={handleChange}
                value={createdUser.nickname}
                autoComplete='none'
                className={css.input}
                placeholder='Nickname'
                type='text'
                name='nickname'
              />
              {error.nickname && <span className={css.Error}>{error.nickname}</span>}
            </label>

            <label className={css.label}>
              <div>
                <span> Email </span> <span className={css.span}>*</span>
              </div>
              <input
                onChange={handleChange}
                value={createdUser.email}
                autoComplete='none'
                className={css.input}
                placeholder='Email'
                type='email'
                name='email'
              />
              {error.email && <span className={css.Error}>{error.email}</span>}
            </label>

            <label className={css.label}>
              <div>
                <span> Password </span> <span className={css.span}>*</span>
              </div>
              <input
                onChange={handleChange}
                value={createdUser.password}
                autoComplete='none'
                className={css.input}
                placeholder='Password'
                type='password'
                name='password'
              />
              {error.password && <span className={css.Error}>{error.password}</span>}
            </label>

            <label className={css.label}>
              <div>
                <span> Confirm Password </span> <span className={css.span}>*</span>
              </div>
              <input
                onChange={handleChange}
                value={createdUser.confirm}
                autoComplete='none'
                className={css.input}
                placeholder='Confirm Password'
                type='password'
                name='confirm'
              />
              {error.confirm && <span className={css.Error}>{error.confirm}</span>}
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

          <div className={css.avatarUser}>
            <img className={css.avatarUserImg}
              src={createdUser.avatar} alt="avatar" />
          </div>
          <p className={css.titleAvatar}>Choose your avatar</p>

          <div
            className={css.avatarContainer}
            onClick={() =>
              setCreatedUser({
                ...createdUser,
                avatar: caballoAvatar
              })
            }
          >
            <img className={css.avatarImg} src={caballoAvatar} alt='avatar' />
          </div>

          <div
            className={css.avatarContainer}
            onClick={() =>
              setCreatedUser({
                ...createdUser,
                avatar: conejoAvatar
              })
            }
          >
            <img className={css.avatarImg} src={conejoAvatar} alt='avatar' />
          </div>

          <div
            className={css.avatarContainer}
            onClick={() =>
              setCreatedUser({
                ...createdUser,
                avatar: gatoBodyAvatar
              })
            }
          >
            <img className={css.avatarImg} src={gatoBodyAvatar} alt='avatar' />
          </div>

          <div
            className={css.avatarContainer}
            onClick={() =>
              setCreatedUser({
                ...createdUser,
                avatar: monoBodyAvatar
              })
            }
          >
            <img className={css.avatarImg} src={monoBodyAvatar} alt='avatar' />
          </div>

          <div
            className={css.avatarContainer}
            onClick={() =>
              setCreatedUser({
                ...createdUser,
                avatar: osoBodyAvatar
              })
            }
          >
            <img className={css.avatarImg} src={osoBodyAvatar} alt='avatar' />
          </div>

          <div
            className={css.avatarContainer}
            onClick={() =>
              setCreatedUser({
                ...createdUser,
                avatar: perroBodyAvatar
              })
            }
          >
            <img className={css.avatarImg} src={perroBodyAvatar} alt='avatar' />
          </div>

          <div
            className={css.avatarContainer}
            onClick={() =>
              setCreatedUser({
                ...createdUser,
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
              setCreatedUser({
                ...createdUser,
                avatar: zorroBodyAvatar
              })
            }
          >
            <img className={css.avatarImg} src={zorroBodyAvatar} alt='avatar' />
          </div>

          <div
            className={css.avatarContainer}
            onClick={() =>
              setCreatedUser({
                ...createdUser,
                avatar: elefanteAvatar
              })
            }
          >
            <img className={css.avatarImg} src={elefanteAvatar} alt='avatar' />
          </div>

          <div
            className={css.avatarContainer}
            onClick={() =>
              setCreatedUser({
                ...createdUser,
                avatar: gatoAvatar
              })
            }
          >
            <img className={css.avatarImg} src={gatoAvatar} alt='avatar' />
          </div>

          <div
            className={css.avatarContainer}
            onClick={() =>
              setCreatedUser({
                ...createdUser,
                avatar: leonAvatar
              })
            }
          >
            <img className={css.avatarImg} src={leonAvatar} alt='avatar' />
          </div>

          <div
            className={css.avatarContainer}
            onClick={() =>
              setCreatedUser({
                ...createdUser,
                avatar: osoAvatar
              })
            }
          >
            <img className={css.avatarImg} src={osoAvatar} alt='avatar' />
          </div>

          <div
            className={css.avatarContainer}
            onClick={() =>
              setCreatedUser({
                ...createdUser,
                avatar: tigreAvatar
              })
            }
          >
            <img className={css.avatarImg} src={tigreAvatar} alt='avatar' />
          </div>

          <div
            className={css.avatarContainer}
            onClick={() =>
              setCreatedUser({
                ...createdUser,
                avatar: unicornioAvatar
              })
            }
          >
            <img className={css.avatarImg} src={unicornioAvatar} alt='avatar' />
          </div>

          <div
            className={css.avatarContainer}
            onClick={() =>
              setCreatedUser({
                ...createdUser,
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