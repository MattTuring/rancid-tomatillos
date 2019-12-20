import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const MovieCard = ({title, poster, rating, id, loggedIn}) => {
  return (
  <article className='movie-card'>
    <h2>{title.toUpperCase()}</h2>
    <div className='movie-img' style={{backgroundImage: `url(${poster})`}}/>
    <div className='rating'>AVERAGE RATING: {Math.round(rating)}</div>
    {loggedIn ? <p>HI</p> : <></>}
    <Link to={`/movies/${id}`}>
      <button>MORE</button>
    </Link>
  </article>
  )
}

const mapStateToProps = state => ({
  loggedIn: state.login.loggedIn
})

export default connect(mapStateToProps)(MovieCard);
