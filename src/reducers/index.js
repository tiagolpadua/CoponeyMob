import { combineReducers } from "redux";
import poneysReducer from "./poneys";
import profileReducer from "./profile";

const rootReducer = combineReducers({
  profile: profileReducer,
  poneys: poneysReducer
});

export default rootReducer;
