export const user = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_USER_STATE':
            return action.userInfo;
        case 'UPDATE_IS_LOGGEDIN':
            return action.userInfo
      default:
        return state;
    }
  }
