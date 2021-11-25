import {combineReducers} from "redux";
import filmReducer from "./filmReducer";
import modalReducer from "./modal";


export const rootReducer = combineReducers({
    films: filmReducer,
    modals: modalReducer,
});