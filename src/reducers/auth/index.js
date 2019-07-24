import { LOGIN, REGISTER, LOAD_STORE, UPDATE_EMAIL } from "../../constants/action-types";
const initialState = {
    email: '',
    password: '',
    loggedin: false,
};

export function authReducer(state = initialState, action) {

    if (action.type === LOGIN) {
        return Object.assign({}, state, {
            email: action.email,
            password: action.password
        });
    }
    else if (action.type === REGISTER) {
        return Object.assign({}, state, {
            email: action.email,
            password: action.password
        });
    }
    else if (action.type === UPDATE_EMAIL) {
        return Object.assign({}, state, {
            email: action.email,
        });
    }
    else if (action.type === LOAD_STORE) {
        console.log('load store', action);
        return Object.assign({}, state, {
            email: action.store ? action.store.email : '',
        });
    }

    return state;

}
