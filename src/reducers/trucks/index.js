import { TRUCKS_RECEIVED } from "../../constants/action-types";
const initialState = {
  trucks: []
};

export function truckReducer(state = initialState, action) {
  if (action.type === TRUCKS_RECEIVED) {
    console.log(action);
    return Object.assign({}, state, {
      trucks: action.trucks
    });
  }
  
  return state;
}
