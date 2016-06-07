import { identity } from 'ramda';

const initialState = {
};

export default (state = initialState, action) => {
    const actionHandler = identity;

    return actionHandler(state, action);
};
