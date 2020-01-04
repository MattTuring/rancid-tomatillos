import { combineReducers } from 'redux';
import { movies } from './movies';
import { user } from './user'

const rootReducer = combineReducers({
  movies, user
});


export default rootReducer;
