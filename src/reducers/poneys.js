import {
  LOAD_PONEYS,
  TOGGLE_VIEW_DELETED_PONEYS,
  ADD_PONEY,
  UPDATE_PONEY,
  DELETE_PONEY
} from "../constants";

const initialState = { list: [], viewDeleted: false };

export default function poneysReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PONEYS:
      return {
        ...state,
        list: [...action.data]
      };
    case TOGGLE_VIEW_DELETED_PONEYS:
      return {
        ...state,
        viewDeleted: !state.viewDeleted
      };
    case ADD_PONEY:
      return {
        ...state,
        list: [...state.list, action.data]
      };
    case UPDATE_PONEY:
      return {
        ...state,
        list: state.list.map(p =>
          p._id === action.data._id ? { ...action.data } : p
        )
      };
    case DELETE_PONEY:
      return {
        ...state,
        list: state.list.map(p =>
          p._id === action.data ? { ...p, excluido: true } : p
        )
      };
    default:
      return state;
  }
}
