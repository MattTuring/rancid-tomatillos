import React from 'react'
import {Link} from 'react-router-dom'
import filmStrip from '../../Images/film-strip.png'

const Header = () => {
  return (
    <>
    <div className='header-background'>
    <nav>
    <h1>RANCID TOMATILLOS</h1>
    <Link to='/login'>
    <button className='login-button'>LOG&nbsp;IN</button>
    </Link>
    </nav>
    </div>

    <div className='film-strip' style={{backgroundImage: `url(${filmStrip})`}}>
    </div>
    </>
  )
}

export default Header
