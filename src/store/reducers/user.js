import {
  SET_USERS_DATA,
  SET_USER_INFO,
  SET_USER_INFO_LOADING,
} from "../actionTypes/user";

const initialState = {
  usersData: [],
  userInfo: { data: {}, loading: false },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_DATA:
      return { ...state, usersData: action.payload };
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: { ...state.userInfo, data: action.payload },
      };
    case SET_USER_INFO_LOADING:
      return {
        ...state,
        userInfo: { ...state.userInfo, loading: action.payload },
      };
    default:
      return state;
  }
};
export default userReducer;
