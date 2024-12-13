import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../../css/header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <h1> <Link to={'/'} className='h1'> Our Employees </Link></h1>
    </div>
  )
}

export default Header
