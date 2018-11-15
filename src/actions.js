import { loadPoneysAPI } from "./api";
import { LOAD_PONEYS, LOGIN, LOGOUT } from "./constants";

export function loadPoneys() {
  return dipatch => {
    loadPoneysAPI()
      .then(res => {
        dipatch({
          type: LOAD_PONEYS,
          data: res.body
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function login(data) {
  return {
    type: LOGIN,
    data
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}
