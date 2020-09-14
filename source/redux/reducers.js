import { combineReducers } from 'redux';
import photoReducer from './photoReducer';
import loaderReducer from './loaderReducer';

const reducers = combineReducers({
    photoReducer,
    loaderReducer
});

export default reducers;
