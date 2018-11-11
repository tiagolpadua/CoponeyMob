import { combineReducers } from "redux";
import poneysReducer from "./poneys";
import profileReducer from "./profile";
import appReducer from "./app";

const rootReducer = combineReducers({
  poneys: poneysReducer,
  profile: profileReducer,
  app: appReducer
});

export default rootReducer;
