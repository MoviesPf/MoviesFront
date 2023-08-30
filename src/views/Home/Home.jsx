import React from 'react'
import { Cards } from '../../Components/Cards/Cards'
import { NavBar } from '../../Components/NavBar/NavBar'
import { Genders } from '../../Components/Genders/Genders'

export const Home = () => {
  return (
    <div>
        <NavBar/>
        <Cards/>
        <Genders/>
    </div>
  )
}
