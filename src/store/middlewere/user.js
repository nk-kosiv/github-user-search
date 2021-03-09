import { setNewUserDataAction } from "../actionCreators/user";

export const getUser = (name) => async (dispatch) => {
  try {
    if (!name.length) return;

    const result = await fetch(
      `https://api.github.com/search/users?q=${name}&per_page=15`
    )
      .then((res) => res.json())
      .then((response) => {
        const userData = response.items.map(
          ({ avatar_url, login, html_url, url }) => {
            return {
              avatar: avatar_url,
              name: login,
              userPage: html_url,
              userApiUrl: url,
            };
          }
        );
        return userData;
      });

    dispatch(setNewUserDataAction(result));
  } catch (e) {
    console.error(e);
  }
};

export const getUserInfo = (url) => (dispatch, getState) => {
  try {
  } catch (e) {
    console.error(e);
  }
};
