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

poneys = poneys.map((p, idx) => ({ ...p, key: idx + "" }));

export default function reducer(state = { poneys: poneys }, action) {
  // console.log("Action: " + action.type);
  switch (action.type) {
    default:
      return state;
  }
}
