import React from 'react'
import {connect} from 'react-redux'
import MovieCard from '../MovieCard/MovieCard'

const MovieContainer = ({movies}) => {

console.log(movies)


  return(
    <div className='movie-container'>
    {movies[0] && movies.map(film => {
      console.log(film)
      return (
      <MovieCard
      key={film.id}
      title={film.title}
      poster={film.poster_path}
      rating={film.rating}
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
