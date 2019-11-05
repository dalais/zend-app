import {SIGNUP_CHANGE_EMAIL_TEXT, SIGNUP_CHANGE_PASSWORD_TEXT} from "./actions";

const defaultState = {
    email: '',
    password: '',
    repeatPassword: ''
};

export const signupReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SIGNUP_CHANGE_EMAIL_TEXT:
            return {
                ...state,
                email: action.payload
            };
        case SIGNUP_CHANGE_PASSWORD_TEXT:
            return {
                ...state,
                password: action.payload
            }
    }

    return state;
};