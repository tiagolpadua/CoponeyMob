import { LOGIN, LOGOUT } from "../constants";

const initialState = {};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        user: action.user
      };
    case LOGOUT:
      return {};
    default:
      return state;
  }
}
