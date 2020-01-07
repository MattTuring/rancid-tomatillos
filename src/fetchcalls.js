export const postUser = (url, body) => {
  console.log(body);
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v1/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            body
        )
    }) .then(response => {
        if (!response.ok) {
          throw Error('Error fetching ideas');
        }
        return response.json();
      })
}

export const retrieveMovies = () => {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v1/movies')
     .then(response => {
        if (!response.ok) {
          throw Error('Error fetching ideas');
        }
        return response.json();
      })
}

export const getRatings = (id) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v1/users/${id}/ratings`)
    .then(response => response.json())
  }

export const postRating = (userId, movieId, rating) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v1/users/${userId}/ratings`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "movie_id": movieId,
      "rating": rating
    })
  })
}
