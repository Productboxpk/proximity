import {combineReducers} from 'redux';
import authReducers from "./reducers/authReducers/auth";

export default combineReducers({
    auth: authReducers
})