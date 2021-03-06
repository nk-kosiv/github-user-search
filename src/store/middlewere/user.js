import {
  setNewUsersDataAction,
  setUserInfoAction,
  setIsUserInfoLoadinAction,
  setUserReposAction,
} from "../actionCreators/user";
import {
  normalizeUserInfo,
  normalizeUsersData,
  normalizeUserRepos,
} from "./utils/normalize";

export const getUsers = (name) => async (dispatch) => {
  try {
    if (!name.length) {
      dispatch(setNewUsersDataAction([]));
      return;
    }

    const response = await fetch(
      `https://api.github.com/search/users?q=${name}&per_page=15`
    );
    const result = await response.json();
    const usersData = result.items.map((res) => normalizeUsersData(res));

    dispatch(setNewUsersDataAction(usersData));
  } catch (e) {
    console.error(e);
  }
};

export const getUserInfo = (url) => async (dispatch) => {
  try {
    if (!url.length) {
      dispatch(setUserInfoAction({}));
      return;
    }

    dispatch(setIsUserInfoLoadinAction(true));

    const response = await fetch(url);
    const result = await response.json();
    const userInfo = normalizeUserInfo(result);

    dispatch(setUserInfoAction(userInfo));
    dispatch(setIsUserInfoLoadinAction(false));
  } catch (e) {
    console.error(e);
  }
};

export const getUserRepos = (url) => async (dispatch) => {
  try {
    if (!url.length) {
      dispatch(setUserReposAction([]));
      return;
    }

    const response = await fetch(url);
    const result = await response.json();
    const userRepos = result.map((res) => normalizeUserRepos(res));

    dispatch(setUserReposAction(userRepos));
  } catch (e) {
    console.error(e);
  }
};
