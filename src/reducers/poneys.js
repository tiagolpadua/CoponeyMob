let poneys = [
  { nome: "Tremor", cor: "Preto" },
  { nome: "Tzar", cor: "Branco" },
  { nome: "Pégaso", cor: "Cinza" },
  { nome: "Relâmpago", cor: "Malhado" },
  { nome: "Tremor", cor: "Preto" },
  { nome: "Tzar", cor: "Branco" },
  { nome: "Pégaso", cor: "Cinza" },
  { nome: "Relâmpago", cor: "Malhado" },
  { nome: "Tremor", cor: "Preto" },
  { nome: "Tzar", cor: "Branco" },
  { nome: "Pégaso", cor: "Cinza" },
  { nome: "Relâmpago", cor: "Malhado" },
  { nome: "Tremor", cor: "Preto" },
  { nome: "Tzar", cor: "Branco" },
  { nome: "Pégaso", cor: "Cinza" },
  { nome: "Relâmpago", cor: "Malhado" },
  { nome: "Tremor", cor: "Preto" },
  { nome: "Tzar", cor: "Branco" },
  { nome: "Pégaso", cor: "Cinza" },
  { nome: "Relâmpago", cor: "Malhado" }
];

poneys = poneys.map((p, idx) => ({ ...p, _id: idx + "" }));

import {
  ADD_PONEY,
  DELETE_PONEY,
  LOAD_PONEYS_PROCESSING,
  LOAD_PONEYS_ERROR,
  LOAD_PONEYS_SUCCESS
} from "../constants";

// const initialState = { list: poneys };

const initialState = { list: [], loading: false, error: null };

export default function poneysReducer(state = initialState, action) {
  console.log("action.type: " + action.type);
  switch (action.type) {
    case LOAD_PONEYS_SUCCESS:
      return {
        ...state,
        list: [...action.data]
      };
    case LOAD_PONEYS_ERROR:
      return {
        ...state,
        error: action.error
      };
    case LOAD_PONEYS_PROCESSING:
      return {
        ...state,
        loading: action.data
      };
    case ADD_PONEY:
      return {
        list: [...state.list, action.data]
      };
    case DELETE_PONEY:
      return {
        list: state.list.filter(p => p._id !== action.data._id)
      };
    default:
      return state;
  }
}
