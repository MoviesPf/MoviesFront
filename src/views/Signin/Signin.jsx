import { useState } from 'react';
import css from './Signin.module.css';
import { useDispatch } from 'react-redux';
import {avatarsArray} from './Images';
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
            </label>
              {error.name && <span className={css.Error}>{error.name}</span>}

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
            </label>
              {error.nickname && <span className={css.Error}>{error.nickname}</span>}

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
            </label>
              {error.email && <span className={css.Error}>{error.email}</span>}

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
            </label>
              {error.password && <span className={css.Error}>{error.password}</span>}

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
            </label>
              {error.confirm && <span className={css.Error}>{error.confirm}</span>}
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
              src={user.avatar} alt="avatar" />
          </div>
          <p className={css.titleAvatar}>Choose your avatar</p>


            {/*  Imagenes */}

            <div className={css.imagenesContainer}> 
                {avatarsArray.map( (avatar,index)=>{
                  return <div
                  key ={index}
                  className={css.avatarContainer}
                  onClick={() =>
                    setUser({
                      ...user,
                      avatar: avatar
                    })
                  }
                >
                  <img className={css.avatarImg} src={avatar} alt='avatar' />
                </div>
                } )}

            </div>

          
        </div>
      </form>
    </div>
  );
};