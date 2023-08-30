import React from 'react'
import { Cards } from '../../Components/Cards/Cards'
import { NavBar } from '../../Components/NavBar/NavBar'
import { Genders } from '../../Components/Genders/Genders'
import Platforms from '../../Components/Platforms/Platforms'

export const Home = () => {
  return (
    <div>
        <NavBar/>
        <Genders/>
        <Platforms/>
        <Cards/>
    </div>
  )
}
