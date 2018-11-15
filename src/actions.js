import {
  addPoneyAPI,
  deletePoneyAPI,
  loadPoneysAPI,
  updatePoneyAPI
} from "./api";
import {
  ADD_PONEY,
  DELETE_PONEY,
  LOAD_PONEYS,
  LOGIN,
  LOGOUT,
  TOGGLE_VIEW_DELETED_PONEYS,
  UPDATE_PONEY
} from "./constants";

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
        alert(error.message);
      });
  };
}

export function addPoney(data) {
  return dipatch => {
    addPoneyAPI(data)
      .then(res => {
        dipatch({
          type: ADD_PONEY,
          data: { ...data, _id: res.body }
        });
      })
      .catch(error => {
        alert(error.message);
      });
  };
}

export function updatePoney(data) {
  return dipatch => {
    updatePoneyAPI(data)
      .then(() => {
        dipatch({
          type: UPDATE_PONEY,
          data
        });
      })
      .catch(error => {
        alert(error.message);
      });
  };
}

export function deletePoney(id) {
  return dipatch => {
    deletePoneyAPI(id)
      .then(() => {
        dipatch({
          type: DELETE_PONEY,
          data: id
        });
      })
      .catch(error => {
        alert(error.message);
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

export function toggleViewDeletedPoneys() {
  return {
    type: TOGGLE_VIEW_DELETED_PONEYS
  };
}
