import React from 'react'

const MovieCard = ({title, poster, rating}) => {
  return (
  <article className='movie-card'>
    <h2>{title}</h2>
    <div className='movie-img' style={{backgroundImage: `url(${poster})`}}/>
    <div>{rating}</div>
    <button>MORE</button>
  </article>
  )
}

export default MovieCard
