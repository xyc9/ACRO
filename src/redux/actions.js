import {SHOW_MODAL, HIDE_MODAL, SHOW_MENU, HIDE_MENU, SHOW_MAP, HIDE_MAP, SET_HEADER_DESCRIPTION} from "./types";

export const showModal = () => {
  return {
    type: SHOW_MODAL,
  }
};

export const hideModal = () => {
  return {
    type: HIDE_MODAL,
  }
};

export const showMenu = () => {
  return {
    type: SHOW_MENU,
  }
};

export const hideMenu = () => {
  return {
    type: HIDE_MENU,
  }
};

export const showMap = () => {
  return {
    type: SHOW_MAP,
  }
};

export const hideMap = () => {
  return {
    type: HIDE_MAP,
  }
};


export const setHeaderDescription = (description) => ({
  type: SET_HEADER_DESCRIPTION,
  payload: {
    description
  }
})
