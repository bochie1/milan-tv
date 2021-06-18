import moviesReducer from './moviesReducer';
import { combineReducers } from 'redux';

/* Main reducer, we can define a new one a put it here */
const rootReducer = combineReducers({
    moviesReducer
});

export default rootReducer;