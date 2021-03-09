import { OPEN_INFO_MODAL, CLOSE_INFO_MODAL } from "../actionTypes/infoModal";

export function openInfoModalAction() {
  return {
    type: OPEN_INFO_MODAL,
  };
}

export function closeInfoModalAction() {
  return {
    type: CLOSE_INFO_MODAL,
  };
}
