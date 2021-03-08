export const getUser = (name) => async (dispatch, getState) => {
  // const { name } = getState().user;
  try {
    const result = await fetch(
      `https://api.github.com/search/users?q=${name}`
    ).then((res) => res.json());
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};
