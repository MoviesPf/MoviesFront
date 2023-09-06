import React from 'react'
import css from './Signin.module.css'
import { BsGoogle } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { AiOutlineCheckCircle } from 'react-icons/ai';


export const Signin = () => {
 
    const handleSubmit = (event) => {
        
    }

  return (
    <div className={css.background}>
    <div className={css.section}>
        <h1>Sing In</h1> 
        <ul className={css.list}>
        <li><BsGoogle/></li>
        <li><BsTwitter/></li>
        <li><BsFacebook/></li>
        <li><BsGithub/></li>
      </ul>
        
        <form onSubmit={handleSubmit} className={css.form}>
        <div className={css.form_group}>
            <input
            placeholder='Email'
            type= "text"
            name= "email"
            />
        </div>
        <div className={css.form_group2}>
            <input
            type= "text"
            name= "password"
            placeholder='Passwoord'
            />
        </div>
        </form>
        <div className={css.policy}>
          <AiOutlineCheckCircle className={css.icon} />
          <p>I agree to the Terms and Privacy Policy</p>
        </div>
        <button className={css.btn}>Sign up</button>
    </div>
    </div>
  )
}
