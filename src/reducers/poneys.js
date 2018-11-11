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

import { ADD_PONEY, DELETE_PONEY } from "../constants";

const initialState = { list: poneys };

export default function poneysReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PONEY:
      return {
        list: [...state.list, action.poney]
      };
    case DELETE_PONEY:
      return {
        list: state.list.filter(p => p._id !== action.poney._id)
      };
    default:
      return state;
  }
}
