import counterReducer from './counter'
import isLoggedReducer from './isLogged'
import {combineReducers} from 'redux'

const AllReducer = combineReducers(
    {
        counter: counterReducer,
        isLogged: isLoggedReducer,
    }
);

export default AllReducer;