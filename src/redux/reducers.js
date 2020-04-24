import {combineReducers} from 'redux';
import {GET_DATA, ADD_TO_CART} from './actions';

const shop = (state = [], action) => {
    switch (action.type) {
        case GET_DATA:
            return state = action.result;
        default:
            return state;
    }
};
const cart = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.item];
        default:
            return state;
    }
};

export default combineReducers({shop, cart});