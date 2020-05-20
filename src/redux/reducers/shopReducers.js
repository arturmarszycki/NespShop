import {GET_DATA, UPDATE_SHOP_ITEM, REMOVE_ITEM} from '../actions/shopActions';

const shop = (state = [], action) => {
    switch (action.type) {
        case GET_DATA:
            return state = action.result;
        case UPDATE_SHOP_ITEM:
            let updated = state.map(el => {
                if (el.id_shop_product === action.item.id_shop_product) {
                    return action.item;
                } else {
                    return el;
                }
            });
            return state = updated;
        case REMOVE_ITEM:
            let updatedCart = state.map(el => {
                if (el.id_shop_product === action.item) {
                    el.qty = 0;
                }
                return el;
            })
            return state = updatedCart;
        default:
            return state;
    }
};

export default shop;