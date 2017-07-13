import { combineReducers } from 'redux';
import { movieReducer } from './movieReducer';
import {movieDetailsReducer} from './movieDetailsReducer'
export default combineReducers({
    movieReducer,
    movieDetailsReducer
});