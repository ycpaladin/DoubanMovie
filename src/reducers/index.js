import { combineReducers } from 'redux';
import { movieReducer } from './movieReducer';
import {movieDetailsReducer} from './movieDetailsReducer';
import { actorReducer} from './actorReducer';
export default combineReducers({
    movieReducer,
    movieDetailsReducer,
    actorReducer
});