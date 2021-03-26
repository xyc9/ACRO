import {SHOW_MAP, HIDE_MAP} from "../types";

const initialState = {

    activeMap: false,
};

export const map = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MAP:
            return {...state, activeMap: true};
        case HIDE_MAP:
            return {...state, activeMap: false};
        default: return  state
    }
};