import React, { useState } from 'react';
import css from './Login.module.css'
import { BsGoogle } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { AiOutlineCheckCircle } from 'react-icons/ai' 
import { BiSolidCameraMovie } from 'react-icons/bi'
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit:', email, password);
  };

  return (
    <div className={css.section}>
      <div className={css.logo}>
        <Link to='/'>
        <BiSolidCameraMovie className={css.icon2}/>
        <h3>GreenScreen</h3>
        </Link>
      </div>
      <div className={css.txt}>
        <h1>Welcome!</h1>
        <p>¡Bienvenido a GreenScreen! Aquí puedes encontrar reseñas y calificaciones de películas. Puedes buscar películas por género, fecha de estreno, artista.</p>
      </div>
    <div className={css.login}>
      <h1>Create Account</h1>
      <ul className={css.list}>
        <li><BsGoogle/></li>
        <li><BsTwitter/></li>
        <li><BsFacebook/></li>
        <li><BsGithub/></li>
      </ul>

      <p>Or use your email for registration</p>
      <form onSubmit={handleSubmit} className={css.form}>
        <div className={css.form_group}>
          <input
            placeholder='Email'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={css.form_group2}>
          <input
          placeholder='password'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className={css.btn}>Login</button>
      </form>
      <div className={css.policy}>
      <AiOutlineCheckCircle className={css.icon}/> 
      <p>I agree to the Terms and Privacy Policy</p>
      </div>
    </div>
    </div>
  );
};

export default Login;
