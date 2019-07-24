import { LOGIN, REGISTER } from "../../constants/action-types";
var initialState = {};

export function localstoreReducer(state = initialState, action) {

    var savedState = false;

    if (action.type === LOGIN) {
        state = Object.assign({}, state, {
            email: action.email,
            password: ''
        });
        savedState = true;
    }
    else if (action.type === REGISTER) {
        state = Object.assign({}, state, {
            email: action.email,
            password: ''
        });
        savedState = true;
    }

    if (savedState) {
        
        var storestr = JSON.stringify(state);

        console.log('local', storestr);

        localStorage.setItem('store', storestr);
        
    }

    return state;

}
