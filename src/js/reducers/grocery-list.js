import { append, identity } from 'ramda';
import * as ActionTypes from '../actions/grocery-list';

const initialState = {
    list: []
};

const actionHandlers = {
    [ActionTypes.ADD_LIST_ITEM]: (state, action) => {
        return { list: append(action.payload.item, state.list) };
    },
    [ActionTypes.GET_LIST]: (state, action) => {
        return { list: action.payload.list };
    }
};

export default (state = initialState, action) => {
    const actionHandler = actionHandlers[action.type] || identity;

    return actionHandler(state, action);
};
