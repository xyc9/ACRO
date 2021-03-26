import {SHOW_MODAL, HIDE_MODAL} from "../types";

const initialState = {
    activeModal: false,
};

export const modal = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return {...state, activeModal: true};
        case HIDE_MODAL:
            return {...state, activeModal: false};
        default: return  state
    }
};