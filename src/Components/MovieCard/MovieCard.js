import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const MovieCard = ({ title, user, averageRating, id, poster}) => {
  const findYourRating = () => {
    let rating = user.ratings[0].ratings.find(rating => rating.movie_id === id);
    if (rating) {
      return rating.rating;
    } else {
      return null;
    }
  }

  return (
    <article className='movie-card'>
      <h2>{title.toUpperCase()}</h2>
      <div className='movie-img' style={{backgroundImage: `url(${poster})`}}/>
      <div className='rating'>AVERAGE RATING: {Math.round(averageRating)}</div>
      {user.loggedIn && user.ratings.length ?
        <p>YOUR RATING: {findYourRating()}</p> :
        <p></p>
      }
      <Link to={`/movies/${id}`}>
        <button>MORE</button>
      </Link>
    </article>
  )
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(MovieCard);
