export const login = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_LOGIN_STATE':
            return action.login;
        case 'UPDATE_IS_LOGGEDIN':
            return action.login      
      default:
        return state;
    }
  }