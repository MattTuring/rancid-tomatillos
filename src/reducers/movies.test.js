import { movies } from '../reducers/movies';

describe('movies reducer', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = movies(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action is ADD_MOVIES', () => {
    const initialState = [{title: 'Titanic'}, {title: 'Toy Story'}]
    const action = {
      type: 'ADD_MOVIES',
      movies: {
        movies: [{title: 'Frozen'}]
      }
    }
    const result = movies(initialState, action);
    const expected = [{title: 'Titanic'}, {title: 'Toy Story'}, {title: 'Frozen'}];

    expect(result).toEqual(expected);
  })

});
