import { ADD_PONEY, DELETE_PONEY, LOGIN, LOGOUT } from "./constants";

export function addPoney(poney) {
  return {
    type: ADD_PONEY,
    poney
  };
}

export function deletePoney(poney) {
  return {
    type: DELETE_PONEY,
    poney
  };
}

export function login(user) {
  return {
    type: LOGIN,
    user
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}
