export const movies = (state = [], action) => {
    switch (action.type) {
      case 'ADD_MOVIES':
        return [...state, { movies: action.movies }];
      default:
        return state;
    }
  }