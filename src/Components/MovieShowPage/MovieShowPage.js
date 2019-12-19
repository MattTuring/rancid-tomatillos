import React from 'react'
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

const MovieShowPage = ({ movie }) => {
  return (
  <section className='movie-show-page'>
    <button>GO BACK</button>
    <div className='movie-info-container'>
      <div style={{backgroundImage: `url(${movie.poster_path})`}}/>
      <div className='movie-info-text'>
        <h2>{movie.title.toUpperCase()}</h2>
        <p >AVERAGE RATING: </p>
      </div>
    </div>
  </section>
  )
}

export default MovieShowPage;
