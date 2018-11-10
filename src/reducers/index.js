import { combineReducers } from "redux";
import poneysReducer from "./poneys";
import profileReducer from "./profile";

const rootReducer = combineReducers({
  poneys: poneysReducer,
  profile: profileReducer
});

export default rootReducer;
