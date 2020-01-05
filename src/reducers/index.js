import { combineReducers } from 'redux';
import { movies } from './movies';
import { user } from './user';
import { loading } from './loading';

const rootReducer = combineReducers({
  movies, user, loading
});


export default rootReducer;
