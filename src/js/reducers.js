import { combineReducers } from 'redux';

import groceryList from './reducers/grocery-list';

const appReducer = combineReducers({
    groceryList
});

export default appReducer;
