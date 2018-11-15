import { LOAD_PONEYS } from "../constants";

const initialState = { list: [], viewDeleted: false };

export default function poneysReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PONEYS:
      return {
        ...state,
        list: [...action.data]
      };
    default:
      return state;
  }
}
