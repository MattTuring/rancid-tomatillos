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

    it('should have a type of ADD_LOGIN_STATE', () => {
        // Setup
        const login = {};
        const expectedAction = {
          type: 'ADD_LOGIN_STATE',
          login:{}
        };
    
        // Execution
        const result = actions.addLoginState(login);
    
        // Expectation
        expect(result).toEqual(expectedAction);
      });
  });