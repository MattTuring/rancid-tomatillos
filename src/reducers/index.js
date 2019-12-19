import { combineReducers } from 'redux';
import { movies } from './movies';
import {login} from './login'
import {ratings} from './ratings'

const rootReducer = combineReducers({
  movies, login, ratings
});


export default rootReducer;
