import {
  SET_USERS_DATA,
  SET_USER_INFO,
  SET_USER_INFO_LOADING,
} from "../actionTypes/user";

export function setNewUsersDataAction(payload) {
  return {
    type: SET_USERS_DATA,
    payload,
  };
}

export function setUserInfoAction(payload) {
  return {
    type: SET_USER_INFO,
    payload,
  };
}

export function setIsUserInfoLoadinAction(isLoading) {
  return {
    type: SET_USER_INFO_LOADING,
    payload: isLoading,
  };
}
