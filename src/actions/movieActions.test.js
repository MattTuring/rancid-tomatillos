import * as actions from '../actions';

describe('actions', () => {
    it('should have a type of ADD_MOVIES', () => {
      const movies = [];
      const expectedAction = {
        type: 'ADD_MOVIES',
        movies:[]
      };

      const result = actions.addMovies(movies);

      expect(result).toEqual(expectedAction);
    });

    it('should have a type of ADD_USER_STATE', () => {
        const userInfo = {};
        const expectedAction = {
          type: 'ADD_USER_STATE',
          userInfo:{}
        };

        const result = actions.addUserState(userInfo);

        expect(result).toEqual(expectedAction);
    });

    it('should have a type of UPDATE_IS_LOGGEDIN', () => {
        const userInfo = {};
        const expectedAction = {
          type: 'UPDATE_IS_LOGGEDIN',
          userInfo:{}
        };

        const result = actions.updateLoggedIn(userInfo);

        expect(result).toEqual(expectedAction);
      });
  });
