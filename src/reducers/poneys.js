import { ADD_PONEY, DELETE_PONEY, LOAD_PONEYS } from "../constants";

const initialState = { list: [], loading: false, error: null };

export default function poneysReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PONEYS:
      return {
        ...state,
        list: [...action.data]
      };
    case ADD_PONEY:
      return {
        ...state,
        list: [...state.list, action.data]
      };
    case DELETE_PONEY:
      return {
        ...state,
        list: state.list.filter(p => p._id !== action.data.id)
      };
    default:
      return state;
  }
}
