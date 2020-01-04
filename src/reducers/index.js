import { combineReducers } from 'redux';
import { movies } from './movies';
import { user } from './user'
import { ratings } from './ratings'

const rootReducer = combineReducers({
  movies, user, ratings
});


export default rootReducer;
