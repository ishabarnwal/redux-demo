import counterReducer from "./Counter";
import loggedReducer from './isLogged';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    count : counterReducer,
    isSignIn : loggedReducer
})
export default allReducers;