import { combineReducers } from "redux";
import poneysReducer from "./poneys";
import profileReducer from "./profile";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  profile: profileReducer,
  poneys: poneysReducer,
  form: formReducer
});

export default rootReducer;
