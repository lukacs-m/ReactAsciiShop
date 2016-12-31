import * as actionTypes from "actionTypes";

/**
 * Reducer in charge of the articles actions handling
 * @param state An Array representing the user articles state
 * @param action the action to parse
 * @returns {*}
 */
export let asciiReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_ASCIIS:
            return [
                ...state,
                ...action.asciis
            ];
        default:
            return state;
    }
};