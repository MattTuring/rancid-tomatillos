import React from 'react'
import { Link } from 'react-router-dom'
import filmStrip from '../../Images/film-strip.png'
import { connect } from 'react-redux'
import { updateLoggedIn } from '../../actions';

const Header = ({ user, updateLoggedIn }) => {
  return (
    <>
    <div className='header-background'>
      <nav>
        <h1>RANCID TOMATILLOS</h1>
        {user.loggedIn ? <Link to='/'>
        <button className='login-button' onClick={() => { updateLoggedIn({
          id:'',
          username: '',
          ratings: [],
          loggedIn: false
        }) }}>LOG&nbsp;OUT</button>
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
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  updateLoggedIn: login => dispatch(updateLoggedIn(login))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
