import { LOCATION_RECEIVED } from "../../constants/action-types";
const initialState = {
  center: {
    lat: 51.4934,
    lng: 0.0098
  },
  zoom: 1
};

export function locationReducer(state = initialState, action) {
  if (action.type === LOCATION_RECEIVED) {
    console.log(action);
    return Object.assign({}, state, {
      center: action.location.center,
      zoom: action.location.zoom
    });
  }
  return state;
}
