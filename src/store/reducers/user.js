import { SET_USERS_DATA } from "../actionTypes/user";

const initialState = {
  userData: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_DATA:
      return { userData: action.payload };
    default:
      return state;
  }
};
export default userReducer;
