import { combineReducers } from 'redux';
import ui from './reducers/ui';

const appReducer = combineReducers({
    ui
});

export default appReducer;
