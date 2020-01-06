import * as actions from '../actions';


describe('actions', () => {
    it('should have a type of ADD_MOVIES', () => {
      // Setup
      const movies = [];
      const expectedAction = {
        type: 'ADD_MOVIES',
        movies:[]
      };

      // Execution
      const result = actions.addMovies(movies);

      // Expectation
      expect(result).toEqual(expectedAction);
    });

    it('should have a type of ADD_USER_STATE', () => {
        // Setup
        const userInfo = {};
        const expectedAction = {
          type: 'ADD_USER_STATE',
          userInfo:{}
        };

        // Execution
        const result = actions.addUserState(userInfo);

        // Expectation
        expect(result).toEqual(expectedAction);
    });

    it('should have a type of UPDATE_IS_LOGGEDIN', () => {
        // Setup
        const userInfo = {};
        const expectedAction = {
          type: 'UPDATE_IS_LOGGEDIN',
          userInfo:{}
        };

        // Execution
        const result = actions.updateLoggedIn(userInfo);

        // Expectation
        expect(result).toEqual(expectedAction);
      });
  });
