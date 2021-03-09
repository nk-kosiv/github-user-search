import { combineReducers } from "redux";
import user from "./user";
import infoModal from "./infoModal";

const rootReducer = combineReducers({
  user,
  infoModal,
});
export default rootReducer;
