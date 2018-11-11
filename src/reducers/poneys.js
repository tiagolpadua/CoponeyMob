import {
  ADD_PONEY,
  DELETE_PONEY,
  LOAD_PONEYS,
  UPDATE_PONEY,
  TOGGLE_VIEW_DELETED_PONEYS
} from "../constants";

const initialState = { list: [], viewDeleted: false };

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
        list: state.list.filter(p => p._id !== action.data)
      };
    case TOGGLE_VIEW_DELETED_PONEYS:
      return {
        ...state,
        viewDeleted: !state.viewDeleted
      };
    case UPDATE_PONEY:
      return {
        ...state,
        list: state.list.map(p =>
          p._id === action.data._id ? { ...action.data } : p
        )
      };
    default:
      return state;
  }
}
