import { combineReducers } from "redux";
import {loginReducer} from "./auth/login/reducers";
import {signupReducer} from "./auth/signup/reducers";

export default combineReducers({
    login: loginReducer,
    signup: signupReducer
});