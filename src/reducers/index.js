import { ADD_ARTICLE, NEWS_RECEIVED, LOCATION_RECEIVED } from "../constants/action-types";
const initialState = {
  articles: []
};
function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  } 
  else if (action.type === LOCATION_RECEIVED) {
    console.log(action);
    return Object.assign({}, state, {
      location: action.location
    });
  }
  else if (action.type === NEWS_RECEIVED) {
    console.log(action);
    return Object.assign({}, state, {
      documents: action.documents
    });
  }
  return state;
}
export default rootReducer;