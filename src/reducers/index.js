import { combineReducers } from 'redux';
import { movieReducer } from './movieReducer';
import {movieDetailsReducer} from './movieDetailsReducer';
import { actorReducer } from './actorReducer';
import { celebrityReducer } from './celebrityReducer';
export default combineReducers({
    movieReducer,
    movieDetailsReducer,
    celebrityReducer,
    actorReducer
});