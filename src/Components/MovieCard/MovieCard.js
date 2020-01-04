import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const MovieCard = ({title, poster, rating, id, loggedIn, ratings}) => {
const showRating = () => {
  return ratings.find(rating => rating.id === id)
}

  return (
  <article className='movie-card'>
    <h2>{title.toUpperCase()}</h2>
    <div className='movie-img' style={{backgroundImage: `url(${poster})`}}/>
    <div className='rating'>AVERAGE RATING: {Math.round(rating)}</div>
    {loggedIn ? showRating() : <></>}
    <Link to={`/movies/${id}`}>
      <button>MORE</button>
    </Link>
  </article>
  )
}

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  ratings: state.user.ratings
})

export default connect(mapStateToProps)(MovieCard);
