import {filmActions} from "./filmReducer/actions";
import {modalActions} from "./modal/actions";


export const allActionCreators = {
    ...filmActions,
    ...modalActions,
}