import {SET_HEADER_DESCRIPTION} from "../types";

const initialState = {

  description: null
};

export const description = (state = initialState, action) => {
  switch (action.type) {
    case SET_HEADER_DESCRIPTION:
      return {...state, description: action.payload.description};
    default:
      return state
  }
};
