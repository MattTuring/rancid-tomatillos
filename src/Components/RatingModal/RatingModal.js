import React from 'react'


const RatingModal = ({show, addRating, rating, submit}) => {



    return(
      <article className='modal' onClick={(event) => addRating(event)}>
      <h1>SELECT YOUR RATING FOR THIS MOVIE:</h1>
      <div className='ratings'>
        <span id='1'>1</span>
        <span id='2'>2</span>
        <span id='3'>3</span>
        <span id='4'>4</span>
        <span id='5'>5</span>
        <span id='6'>6</span>
        <span id='7'>7</span>
        <span id='8'>8</span>
        <span id='9'>9</span>
        <span id='10'>10</span>
      </div>
      {rating &&<button className='submit-button' onClick={() => {submit(); show()}} >Submit Rating: {rating}</button>}
      <span className='x' onClick={show}>X</span>
      </article>
    )


}

export default RatingModal;
