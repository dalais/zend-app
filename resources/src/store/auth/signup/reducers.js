const defaultState = {
    email: '',
    password: '',
    repeatPassword: ''
};

export const signupReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SIGNUP_USER':
            return {...state, currentUser: action.payload };
    }
    return state;
};