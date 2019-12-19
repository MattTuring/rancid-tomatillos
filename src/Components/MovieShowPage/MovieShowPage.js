import React from 'react'
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

const MovieShowPage = ({ movie }) => {
  const reorderDate = () => {
    let dateArray = movie.release_date.split('-');
    let date = `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`;
    return date;
  }

  return (
  <section className='movie-show-page'>
    <button>GO BACK</button>
    <div className='movie-info-container'>
      <div className='movie-poster' style={{backgroundImage: `url(${movie.poster_path})`}}/>
      <div className='movie-info-text'>
        <h2>{movie.title.toUpperCase()}</h2>
        <p>OVERVIEW: {movie.overview}</p>
        <p>RELEASE DATE: {reorderDate()}</p>
        <p>AVERAGE RATING: {movie.average_rating}</p>
      </div>
    </div>
  </section>
  )
}

export default MovieShowPage;
