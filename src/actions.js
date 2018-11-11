import { loadPoneysAPI, deletePoneyAPI } from "./api";
import {
  ADD_PONEY,
  LOAD_PONEYS,
  LOGIN,
  LOGOUT,
  LOADING,
  SET_ERROR,
  DELETE_PONEY
} from "./constants";

export function loadPoneys() {
  return dipatch => {
    dipatch({
      type: LOADING,
      data: true
    });
    loadPoneysAPI()
      .then(res => {
        dipatch({
          type: LOAD_PONEYS,
          data: res.body
        });
        dipatch({
          type: LOADING,
          data: false
        });
      })
      .catch(error => {
        dipatch({
          type: SET_ERROR,
          data: error.message
        });
        dipatch({
          type: LOADING,
          data: false
        });
      });
  };
}

export function deletePoney(id) {
  return dipatch => {
    dipatch({
      type: LOADING,
      data: true
    });
    deletePoneyAPI(id)
      .then(() => {
        dipatch({
          type: DELETE_PONEY,
          data: id
        });
      })
      .catch(error => {
        dipatch({
          type: SET_ERROR,
          error
        });
      });
  };
}

export function addPoney(data) {
  return {
    type: ADD_PONEY,
    data
  };
}

/* export function deletePoney(data) {
  return {
    type: DELETE_PONEY,
    data
  };
} */

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
