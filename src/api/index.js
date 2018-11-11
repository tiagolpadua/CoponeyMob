import request from "superagent";

const URI = "https://coponeyapi.herokuapp.com/v1/poneys";

export function loadPoneysAPI() {
  return request.get(URI).set("Accept", "application/json");
}

export function deletePoneyAPI(id) {
  return request.delete(URI + "/" + id);
}
