import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav>
    <h1>RANCID TOMATILLOS</h1>
    <Link to='/login'>
    <button className='login-button'>LOG IN</button>
    </Link>
    </nav>
  )
}

export default Header
