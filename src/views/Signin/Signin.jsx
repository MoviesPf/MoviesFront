import { useEffect, useState } from 'react';
import css from './Signin.module.css';
import { useDispatch } from 'react-redux';
import {avatarsArray} from './Images';
import { useNavigate } from 'react-router-dom';
import { createUsers } from '../../Redux/actions';
import BtnHome from '../../Components/Buttons/BtnHome';
import { validations } from './validations';



export const Signin = () => {


  function changeLabelText(){
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      setConfTextPass("Confirm");
    } else {
      setConfTextPass("Confirm Password");
    }
    console.log(screenWidth)
    console.log(confTextPass)
  }
  window.onload = changeLabelText;
  window.onresize = changeLabelText;



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

  const [confTextPass,setConfTextPass] = useState("Confirm Password")
  const [displayAvatars,setDisplayAvatars] = useState({ display: 'none' })
  const [chooseAvatar,setChooseAvatar] = useState({visibility: "visible" })

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

  const showAvatars = () => {
    if (displayAvatars.display === "none") setDisplayAvatars({ display: 'flex' })
    if (displayAvatars.display === "flex") setDisplayAvatars({ display: 'none' })
    
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    dispatch(createUsers(user));
    navigate('/');
  };

  return (
    <div className={css.background}>
    
      <BtnHome className={css.btnHome} />
      <div className={css.ViewContainer}>

        <h1 className={css.title}>SIGN UP</h1>
{/*  /////////////// User Avatar Area //////////////// */}
        <div className={css.sectionAvatar} >

          <div className={css.avatarUser} onClick={showAvatars}>
            <img className={css.avatarUserImg}
              src={user.avatar} alt="avatar" />
          </div>
          <p className={css.titleAvatar} style={chooseAvatar}>Choose your avatar</p>

          {/*////////////////  Imagenes ////////////////*/}

          <div className={css.imagenesBGfiltrer} style={displayAvatars} onClick={showAvatars}/> 
            <div className={css.imagenesContainer} style={displayAvatars}> 
                {avatarsArray.map( (avatar,index)=>{
                  return <div
                  key ={index}
                  className={css.avatarContainer}
                  onClick={() =>
                    {
                      setUser({...user,avatar: avatar})
                      setChooseAvatar({visibility: "hidden" })
                      showAvatars()
                    }
                  }
                >
                  <img className={css.avatarImg} src={avatar} alt='avatar' />
                </div>
                } )}
            </div>
        </div>

 {/*  /////////////// Form Area //////////////// */}       
      <form className={css.form} onSubmit={handleSubmit}>

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
                value={user.name}
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
                value={user.nickname}
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
                value={user.email}
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
                value={user.password}
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
                value={user.confirm}
                autoComplete='none'
                className={css.input}
                placeholder='Confirm Password'
                type='password'
                name='confirm'
              />
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
      </form>
      </div>
    </div>
  );
};