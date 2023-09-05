import React, { useState } from 'react'
import { SearchBar } from '../SearchBar/SearchBar'
import css from './NavBar.module.css'
import { Link, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import { SearchedCard } from '../SearchedCard/SearchedCard';
import { BiSolidCameraMovie } from 'react-icons/bi'

export const NavBar = () => {
  const { pathname } = useLocation();
  const searchedPrograms = useSelector((state) => state.searchedPrograms)

  const [ show, setShow ] = useState( false );
  const [ searched, setSearched ] = useState(false);

  const toggleShow = () => {
    setShow(!show)
  }

  return (
    <div className={css.allNavbar}>
    <div className={css.background}>

      <div className={css.contRight}>
        <Link to="/" className={css.logo}>
          <BiSolidCameraMovie/>
          <h1>GreenScreen</h1>
        </Link>
      </div>

      <div className={css.contMid}>
        <button className={css.types}>Movies</button>
        <button className={css.types}>Series</button>
      </div>

      <div className={css.contLeft}>
        { pathname === "/" &&
        <button type="button" className={css.searchButton} onClick={ toggleShow }>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </button>
        }
        <Link to='/login'>
          <button className={css.sesion}>Login</button>
        </Link>
        <Link to='/signin'>
          <button className={css.sesion}>Sign In</button>
        </Link>
      </div>
    </div>
      { show && 
      <div className={css.searchComponent}>
        <SearchBar setSearched={setSearched} searched={searched}/>
        {
          <div className={css.cartas}>
            {
              !searched

              ? <h1> Search for a Movie/Serie here ↑↑</h1>

              : searchedPrograms.length

              ? searchedPrograms.map((program) => {
                  return (
                    <SearchedCard key={program.id} program={program}/>
                  )
                })
                
              : <h1> Movie/Serie Not Found </h1>
            }
          </div>
        }
        <div className={css.bottom}>bottom</div>
      </div>
      }
    </div>
  )
}