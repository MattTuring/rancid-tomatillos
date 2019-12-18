import React from 'react'
import { Link } from 'react-router-dom';

const MovieCard = ({title, poster, rating, id}) => {
  console.log(id)
  return (
  <article className='movie-card'>
    <h2>{title.toUpperCase()}</h2>
    <div className='movie-img' style={{backgroundImage: `url(${poster})`}}/>
    <div className='rating'>AVERAGE RATING: {rating}</div>
    <Link to={"/movies/" + id}>
      <button>MORE</button>
    </Link>
  </article>
  )
}

export default MovieCard
