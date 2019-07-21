import { combineReducers } from "redux";
import { authReducer } from "./auth/index";
import { locationReducer } from "./location/index";
import { uiReducer } from "./ui/index";
import { truckReducer } from "./trucks/index";

export default rootReducer = combineReducers([authReducer, locationReducer, uiReducer, truckReducer]);