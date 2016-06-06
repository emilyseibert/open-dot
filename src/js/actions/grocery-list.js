import { getGroceryList } from '../services/grocery-list';

export const ADD_LIST_ITEM = 'ADD_LIST_ITEM';
export const GET_LIST = 'GET_LIST';

export const addListItem = (item) => {
    return (dispatch) => {
        dispatch({
            type: ADD_LIST_ITEM,
            payload: {
                item: item
            }
        });
    };
}

export const getInitialGroceryList = () => {
    return (dispatch) => {
        getGroceryList()
            .then(response => {
                dispatch({
                    type: GET_LIST,
                    payload: {
                        list: response
                    }
                });
            })
            .catch(err => console.warn(err));
    };
}
