import { OPEN_POPOVER, CLOSE_POPOVER } from "../../constants/action-types";
const initialState = {
  text: '',
  target: null,
  isOpen: false
};

export function uiReducer(state = initialState, action) {
  if (action.type === OPEN_POPOVER) {
    console.log(action);
    return Object.assign({}, state, {
      text: action.text,
      target: action.target,
      isOpen: true
    });
  }
  else if (action.type === CLOSE_POPOVER) {
    console.log(action);
    return Object.assign({}, state, {
      text: '',
      target: null,
      isOpen: false
    });
  }
  return state;
}

