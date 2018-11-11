import { loadPoneysAPI } from "./api/constants";
import {
  ADD_PONEY,
  DELETE_PONEY,
  LOAD_PONEYS_ERROR,
  LOAD_PONEYS_PROCESSING,
  LOAD_PONEYS_SUCCESS,
  LOGIN,
  LOGOUT
} from "./constants";

export function loadPoneys() {
  return dipatch => {
    dipatch({
      type: LOAD_PONEYS_PROCESSING,
      data: true
    });
    loadPoneysAPI()
      .then(res => {
        dipatch({
          type: LOAD_PONEYS_SUCCESS,
          data: res.body
        });
      })
      .catch(error => {
        dipatch({
          type: LOAD_PONEYS_ERROR,
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

export function deletePoney(data) {
  return {
    type: DELETE_PONEY,
    data
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
