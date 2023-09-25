import { useEffect, useState } from 'react';
import css from './Signin.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {avatarsArray} from './Images';
import { useNavigate } from 'react-router-dom';
import { createUsers } from '../../Redux/actions';
import BtnHome from '../../Components/Buttons/BtnHome';
import { validations } from './validations';

export const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  
  const [createdUser, setUser] = useState({
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
    console.log(createdUser);
    dispatch(createUsers(createdUser));
    
    if(user?.id) {
      navigate('/');
    }
  };

  function changeLabelText(){
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      setConfTextPass("Confirm");
    } else {
      setConfTextPass("Confirm Password");
    }
  }
  window.onload = changeLabelText;
  window.onresize = changeLabelText;


  const [confTextPass,setConfTextPass] = useState("Confirm Password")
  const [displayAvatars,setDisplayAvatars] = useState({ display: 'none' })
  const [chooseAvatar,setChooseAvatar] = useState({visibility: "visible" })

  const showAvatars = () => {
    if (displayAvatars.display === "none") setDisplayAvatars({ display: 'flex' })
    if (displayAvatars.display === "flex") setDisplayAvatars({ display: 'none' })
  }

  return (

    <div className={css.background}>
      <BtnHome/>
      <div className={css.ViewContainer}>

        <h1 className={css.title}>SIGN UP</h1>

      <div className={css.totalGrid}>
      <div className={css.leftSide}>
{/*  /////////////// User Avatar Area //////////////// */}
        <div className={css.sectionAvatar} >

          <div className={css.avatarUser} onClick={showAvatars}>
            <img className={css.avatarUserImg}
              src={createdUser.avatar} alt="avatar" />
          </div>
        </div>
 {/*  /////////////// Form Area //////////////// */}       
      <form id='userForm' className={css.form} onSubmit={handleSubmit}>

        <div className={css.section}>
           <div className={css.labelSection}>
            
           <label className={css.label}>
              Name <span className={css.span}>*</span>
            </label>
            <label className={css.label}>
              Nickname <span className={css.span}>*</span>
            </label>
            <label className={css.label}>
              Email <span className={css.span}>*</span>
            </label>
            <label className={css.label}>
              Password <span className={css.span}>*</span>
            </label>
            <label className={css.label}>
             {confTextPass} <span className={css.span}>*</span>
            </label>

           </div>

           <div className={css.inputsSection}>
              {error.name
              ? <span className={css.Error} style={{visibility:"visible"}}>{error.name}</span>
              : <span className={css.Error} style={{visibility:"hidden"}}>{null}</span>}
              <input
                onChange={handleChange}
                value={createdUser.name}
                autoComplete='none'
                className={css.input}
                placeholder='Name'
                type='text'
                name='name'
              />
              {error.nickname
              ? <span className={css.Error} style={{visibility:"visible"}}>{error.nickname}</span>
              : <span className={css.Error} style={{visibility:"hidden"}}>{null}</span>}
              <input
                onChange={handleChange}
                value={createdUser.nickname}
                autoComplete='none'
                className={css.input}
                placeholder='Nickname'
                type='text'
                name='nickname'
              />
              {error.email
              ? <span className={css.Error} style={{visibility:"visible"}}>{error.email}</span>
              :<span className={css.Error} style={{visibility:"hidden"}}>{null}</span>}  
              <input
                onChange={handleChange}
                value={createdUser.email}
                autoComplete='none'
                className={css.input}
                placeholder='Email'
                type='email'
                name='email'
              />
              {error.password
              ? <span className={css.Error} style={{visibility:"visible"}}>{error.password}</span>
              : <span className={css.Error} style={{visibility:"hidden"}}>{null}</span>}
             <input
                onChange={handleChange}
                value={createdUser.password}
                autoComplete='none'
                className={css.input}
                placeholder='Password'
                type='password'
                name='password'
              />
              {error.confirm
              ? <span className={css.Error} style={{visibility:"visible"}}>{error.confirm}</span>
              : <span className={css.Error} style={{visibility:"hidden"}}>{null}</span>}
              <input
                onChange={handleChange}
                value={createdUser.confirm}
                autoComplete='none'
                className={css.input}
                placeholder='Confirm Password'
                type='password'
                name='confirm'
              />
           </div>
        </div>
      </form>
      </div>

      {/*////////////////  Imagenes ////////////////*/}
      <div className={css.rightSide}>
        <h1 className={css.chooseTitle}>Choose your avatar</h1>
        <div className={css.imagenesContainer}> 
          {avatarsArray.map( (avatar,index)=>{
            return <div
            key ={index}
            className={css.avatarContainer}
            onClick={() => {
              setUser({...createdUser,avatar: avatar})
              setChooseAvatar({visibility: "hidden" })
              showAvatars()
            }}>
            <img className={css.avatarImg} src={avatar} alt='avatar' />
          </div>
          } )}
        </div>
      </div>
      </div>

        <div className={css.containBtn}>
          <div className={css.policy}>
            <input className={css.checkbox} type='checkbox' name='policy' />
            <p>I agree to the Terms and Privacy Policy</p>
          </div>
          <button type='submit' form='userForm' className={css.btn}>Sign up</button>
        </div> 

      </div>
    </div>
  );
};