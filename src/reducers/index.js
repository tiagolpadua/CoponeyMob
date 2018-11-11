import { combineReducers } from "redux";
import poneysReducer from "./poneys";
import profileReducer from "./profile";
import appReducer from "./app";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  poneys: poneysReducer,
  profile: profileReducer,
  app: appReducer,
  form: formReducer
});

export default rootReducer;
