import { TRUCKS_RECEIVED, UPDATE_LISTNER, ADD_TRUCK } from "../../constants/action-types";
const initialState = {
  trucks: [],
  listner: undefined
};

export function truckReducer(state = initialState, action) {
  if (action.type === TRUCKS_RECEIVED) {
    console.log(action);
    return Object.assign({}, state, {
      trucks: action.trucks
    });
  } 
  else if (action.type === UPDATE_LISTNER) {
    return Object.assign({}, state, {
      listner: action.listner
    });
  }
  else if (action.type === ADD_TRUCK) {
    console.log(action);
    var currentTrucks = state.trucks;
    currentTrucks.push(action.truck);
    return Object.assign({}, state, {
      trucks: currentTrucks
    });
  } 
  
  return state;
}
