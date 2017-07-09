import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger'
import rootReducer from './reducers/index';
const loggerMiddleware = createLogger();
const buildStore = applyMiddleware(loggerMiddleware, thunkMiddleware)(createStore);
const store = buildStore(rootReducer, {});

export default store;

