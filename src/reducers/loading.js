export const loading = (state = false, action) => {
  switch (action.type) {
    case 'CHANGE_LOADING':
      return !state;
    default:
      return state;
  }
}
