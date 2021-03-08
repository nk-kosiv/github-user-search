import { setNewUserDataAction } from "../actionCreators/user";

export const getUser = (name) => async (dispatch, getState) => {
  // const { name } = getState().user;
  try {
    if (!name.length) return;

    const result = await fetch(
      `https://api.github.com/search/users?q=${name}&per_page=30`
    ).then((res) => res.json());
    dispatch(setNewUserDataAction(result));
  } catch (e) {
    console.log(e);
  }
};
