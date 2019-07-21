import { LOGIN, REGISTER } from "../../constants/action-types";
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

    return state;

}
