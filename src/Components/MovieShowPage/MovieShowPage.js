import React from 'react'
import { Link } from 'react-router-dom';

const MovieShowPage = ({ movie }) => {
  const reorderDate = () => {
    let dateArray = movie.release_date.split('-');
    let date = `${dateArray[1]}-${dateArray[2]}-${dateArray[0]}`;
    return date;
  }

  return (
  <section className='movie-show-page'>
    <Link to='/'>
      <button className='go-back-button'>GO BACK</button>
    </Link>
    <div className='movie-info-container'>
      <div className='movie-poster' style={{backgroundImage: `url(${movie.poster_path})`}}/>
      <div className='movie-info-text'>
        <h2>{movie.title.toUpperCase()}</h2>
        <p>OVERVIEW: {movie.overview}</p>
        <p>RELEASE DATE: {reorderDate()}</p>
        <p>AVERAGE RATING: {movie.average_rating}</p>
        <button className='rate-button'>RATE THIS MOVIE</button>
      </div>
    </div>
  </section>
  )
}

export default MovieShowPage;
