import React from 'react'
import { SearchBar } from '../SearchBar/SearchBar'
import css from './NavBar.module.css'
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className={css.background}>
      <div className={css.contRight}>
        <h1 className={css.logo}>GreenScreen</h1>
      </div>
      <div className={css.contMid}>
        <button className={css.types}>Movies</button>
        <button className={css.types}>Series</button>
      </div>
      <div className={css.contLeft}>
        <SearchBar/>
        <Link to='/login'>
        <button className={css.sesion}>Sign In</button>
        </Link>
        <Link to='/signin'>
        <button className={css.sesion}>Log In</button>
        </Link>
      </div>
    </div>
  )
}
