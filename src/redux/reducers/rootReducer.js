import { combineReducers } from "redux";
 import { modal } from "./modal";
 import { aside } from "./aside";
 import { map } from "./map";
 import {description} from "./description";

// собирает все reducers в 1
export const rootReducer = combineReducers({
    modal,
    aside,
    map,
    description
});
