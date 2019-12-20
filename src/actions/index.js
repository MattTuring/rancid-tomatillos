export const addMovies = movies => ({
    type: 'ADD_MOVIES',
    movies
});

export const addRatings = ratings => ({
    type: 'ADD_RATING',
    ratings
});

export const addLoginState = login => ({
  type: 'ADD_LOGIN_STATE',
  login
});

export const updateLoggedIn = login => ({
  type: 'UPDATE_IS_LOGGEDIN',
  login
});
