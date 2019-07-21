import { GET_TRUCKS, TRUCKS_RECEIVED, GET_LOCATION, LOCATION_RECEIVED, OPEN_POPOVER, CLOSE_POPOVER, LOGIN, REGISTER } from "../constants/action-types";

export function getTrucks() {
    return { type: GET_TRUCKS}
}

export function getLocation() {
    return { type: GET_LOCATION}
}

export function trucksReceived(trucks) {
    return { type: TRUCKS_RECEIVED, trucks };
}

export function locationReceived(location) {
    return { type: LOCATION_RECEIVED, location };
}

export function openPopUp(target, text) {
    return { type: OPEN_POPOVER, target, text };
}

export function closePopUp() {
    return { type: CLOSE_POPOVER}
}

export function signUp(email, password) {
    return { type: REGISTER, email, password }
}

export function signIn(email, password) {
    return { type: LOGIN, email, password }
}