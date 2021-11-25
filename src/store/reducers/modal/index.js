import {actions} from "../../../utils/consts";

const initialState = {
    drawer: false,
    contentOpen: false,
}

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_DRAWER:
            return {...state, drawer: action.payload};
        default:
            return state;
    }
}

export default modalReducer;