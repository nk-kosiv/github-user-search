import { OPEN_INFO_MODAL, CLOSE_INFO_MODAL } from "../actionTypes/infoModal";

const initialState = {
  isOpen: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_INFO_MODAL:
      return { isOpen: true };
    case CLOSE_INFO_MODAL:
      return { isOpen: false };
    default:
      return state;
  }
};
export default userReducer;
