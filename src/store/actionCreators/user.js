import { SET_USERS_DATA } from "../actionTypes/user";

export function setNewUserDataAction(payload) {
  return {
    type: SET_USERS_DATA,
    payload,
  };
}
