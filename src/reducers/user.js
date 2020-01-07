export const user = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_USER_STATE':
      return action.userInfo;
    case 'UPDATE_IS_LOGGEDIN':
      return action.userInfo;
    case 'ADD_RATING':
      state.ratings = [action.ratings]
      return state;
    default:
      return state;
  }
}
