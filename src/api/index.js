import request from "superagent";

const URI = "https://coponeyapi.herokuapp.com/v1/poneys";

export function loadPoneysAPI() {
  return request.get(URI).set("Accept", "application/json");
}

export function addPoneyAPI(poney) {
  return request.post(URI).send(poney);
}

export function updatePoneyAPI(poney) {
  return request.put(URI + "/" + poney._id).send(poney);
}
