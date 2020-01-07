import { user } from '../reducers/user';

describe('user reducer', () => {
  it('should return the initial state', () => {
    const expected = {};

    const result = user(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action is ADD_USER_STATE', () => {
    const initialState = {};
    const userInfo = {id: 2, email: 'kayla@gmail.com', ratings: [], loggedIn: true};

    const action = {
      type: 'ADD_USER_STATE',
      userInfo
    }

    const result = user(initialState, action);
    const expected = userInfo;

    expect(result).toEqual(expected);
  })

  it('should return the correct state if the action is UPDATE_IS_LOGGEDIN', () => {
    const initialState = {};
    const userInfo = {id: 2, email: 'kayla@gmail.com', ratings: [], loggedIn: true};

    const action = {
      type: 'UPDATE_IS_LOGGEDIN',
      userInfo
    }

    const result = user(initialState, action);
    const expected = userInfo;

    expect(result).toEqual(expected);
  })

  it('should return the correct state if the action is ADD_RATING', () => {
    const initialState = {id: 2, email: 'kayla@gmail.com', ratings: [], loggedIn: true};
    const ratings = {rating: 3};

    const action = {
      type: 'ADD_RATING',
      ratings
    }

    const result = user(initialState, action);
    const expected = {id: 2, email: 'kayla@gmail.com', ratings: [{rating: 3}], loggedIn: true};

    expect(result).toEqual(expected);
  })

});
