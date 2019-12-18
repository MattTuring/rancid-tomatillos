import { combineReducers } from 'redux';
import { movies } from './movies';
import {login} from './login'

const rootReducer = combineReducers({
  movies, login
});


export default rootReducer;
