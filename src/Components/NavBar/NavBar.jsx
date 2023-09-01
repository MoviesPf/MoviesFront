import React from 'react'
import { SearchBar } from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div>
        <h1>NavBar</h1>
        <Link to='/login'>
        <h2>Login</h2>
        </Link>
        <Link to='/signin'>
        <h2>Signin</h2>
        </Link>
        <SearchBar/>
        
    </div>
  )
}
