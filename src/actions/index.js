import { ADD_ARTICLE, GET_NEWS, NEWS_RECEIVED, GET_LOCATION, LOCATION_RECEIVED } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function getNews() {
    return { type: GET_NEWS}
}

export function getLocation() {
    return { type: GET_LOCATION}
}

export function newsReceived(documents) {
    return { type: NEWS_RECEIVED, documents };
}

export function locationReceived(location) {
    return { type: LOCATION_RECEIVED, location };
}
  