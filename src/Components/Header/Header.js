import React from 'react'
import {Link} from 'react-router-dom'
import filmStrip from '../../Images/film-strip.png'
import {connect} from 'react-redux'

const Header = ({login}) => {
  console.log(login)
  return (
    <>
    <div className='header-background'>
    <nav>
    <h1>RANCID TOMATILLOS</h1>
    {login.loggedIn ? <Link to='/'>
    <button className='login-button'>LOG&nbsp;OUT</button>
    </Link> : <Link to='/login'>
    <button className='login-button'>LOG&nbsp;IN</button>
    </Link>}

    </nav>
    </div>

    <div className='film-strip' style={{backgroundImage: `url(${filmStrip})`}}>
    </div>
    </>
  )
}

const mapStateToProps = state => ({
  login: state.login
})

export default connect(mapStateToProps)(Header)
