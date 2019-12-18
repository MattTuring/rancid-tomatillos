export const login = (state = {}, action) => {
    console.log(action)
    switch (action.type) {
      case 'ADD_LOGIN_STATE':
        return action.login;
      default:
        return state;
    }
  }