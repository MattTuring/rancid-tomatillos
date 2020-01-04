export const addMovies = movies => ({
    type: 'ADD_MOVIES',
    movies
});

export const addRatings = ratings => ({
    type: 'ADD_RATING',
    ratings
});

export const addUserState = userInfo => ({
  type: 'ADD_USER_STATE',
  userInfo
});

export const updateLoggedIn = userInfo => ({
  type: 'UPDATE_IS_LOGGEDIN',
  userInfo
});
