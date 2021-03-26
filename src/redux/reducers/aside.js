import { SHOW_MENU, HIDE_MENU } from "../types";

const initialState = {
    activeMenu: false,
};

export const aside = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MENU:
            return {...state, activeMenu: true};
        case HIDE_MENU:
            return {...state, activeMenu: false};
        default: return  state
    }
};