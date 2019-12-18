import React from 'react'
import { Link } from 'react-router-dom';

const MovieCard = ({title, poster, rating, id}) => {
  return (
  <article className='movie-card'>
    <h2>{title}</h2>
    <div className='movie-img' style={{backgroundImage: `url(${poster})`}}/>
    <div className='rating'>RATING: {rating}</div>
    <Link to={"/movies/" + id}>
      <button>MORE</button>
    </Link>
  </article>
  )
}

export default MovieCard
