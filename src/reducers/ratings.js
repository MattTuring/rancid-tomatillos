export const ratings = (state = [], action) => {
  console.log(action)
    switch (action.type) {
      case 'ADD_RATING':
        return [...state, ...action];
      default:
        return state;
    }
  }