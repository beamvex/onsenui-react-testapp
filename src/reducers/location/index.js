import { TRUCKS_RECEIVED, LOCATION_RECEIVED, OPEN_POPOVER, CLOSE_POPOVER } from "../../constants/action-types";
const initialState = {
  location: {
    center: {
      lat: 51.4934,
      lng: 0.0098
    },
    zoom: 1
  },
  trucks: [],
  popover: {
    text: '',
    target: null,
    isOpen: false
  }
};

function rootReducer(state = initialState, action) {
  if (action.type === LOCATION_RECEIVED) {
    console.log(action);
    return Object.assign({}, state, {
      location: action.location
    });
  }
  else if (action.type === TRUCKS_RECEIVED) {
    console.log(action);
    return Object.assign({}, state, {
      documents: action.documents
    });
  }
  else if (action.type === OPEN_POPOVER) {
    console.log(action);
    return Object.assign({}, state, {
      popover: {
        text: action.text,
        target: action.target,
        isOpen: true
      }
    });
  }
  else if (action.type === CLOSE_POPOVER) {
      console.log(action);
      return Object.assign({}, state, {
        popover: {
          text: '',
          target: null,
          isOpen: false
        }
      });
    }
    return state;
}

export default rootReducer;