import React from 'react'
import {connect} from 'react-redux'
import MovieCard from '../MovieCard/MovieCard'

const MovieContainer = ({movies}) => {



  return(
    <div className='movie-container'>
    {movies[0] && movies.map(film => {

      return (
      <MovieCard
      key={film.id}
      id={film.id}
      title={film.title}
      poster={film.poster_path}
      rating={film.average_rating}
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
