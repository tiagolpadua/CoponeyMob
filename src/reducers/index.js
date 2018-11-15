import { combineReducers } from "redux";
import poneysReducer from "./poneys";

const rootReducer = combineReducers({
  poneys: poneysReducer
});

export default rootReducer;
