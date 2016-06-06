import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers.js';

const createStoreWith = compose(applyMiddleware(thunkMiddleware))(createStore);

const configureStore = (initialState) => {
    return createStoreWith(rootReducer, initialState);
};

export default configureStore;
