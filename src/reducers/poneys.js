let poneys = [
  { nome: "Tremor" },
  { nome: "Tzar" },
  { nome: "Pégaso" },
  { nome: "Epona" },
  { nome: "Macedonio" },
  { nome: "Vicário" },
  { nome: "Tro" },
  { nome: "Nicanor" },
  { nome: "Niceto" },
  { nome: "Odón" },
  { nome: "Relâmpago" },
  { nome: "Pio" },
  { nome: "Elegante" },
  { nome: "Pompeu" }
];

poneys = poneys.map((p, idx) => ({ ...p, _id: idx + "" }));

const initialState = { list: poneys, viewDeleted: false };

export default function poneysReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
