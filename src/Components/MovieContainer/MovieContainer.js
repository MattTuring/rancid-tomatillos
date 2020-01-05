import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';

const MovieContainer = ({ movies, user}) => {

  return (
    <div className='movie-container'>
      {movies.map(film => {
        return (
          <MovieCard
            key={film.id}
            id={film.id}
            title={film.title}
            poster={film.poster_path}
            averageRating={film.average_rating}
          />
        )
      })}
    </div>
  )
}

const mapStateToProps = state => ({
  movies: state.movies
})

export default connect(mapStateToProps)(MovieContainer)
