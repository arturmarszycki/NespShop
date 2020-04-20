import {combineReducers} from 'redux';
import {GET_DATA} from './actions';

const shop = (state = [], action) => {
    switch (action.type) {
        case GET_DATA:
            return state = action.result;
        default:
            return state;
    }
};

export default combineReducers({shop});