const DB = 'http://localhost:3000/shop';

const GET_DATA = 'GET_DATA';
const UPDATE_SHOP_ITEM = 'UPDATE_SHOP_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const fetchData = () => dispatch => {
    fetch(DB).then(response => {
        return response.json();
    }).then(result => {
        dispatch({type: GET_DATA, result});
    }).catch(error => {
        console.log(error);
    });
};
const updateShopItem = item => ({type: UPDATE_SHOP_ITEM, item});
const removeItem = item => ({type: REMOVE_ITEM, item});

export {GET_DATA, UPDATE_SHOP_ITEM, REMOVE_ITEM, fetchData, updateShopItem, removeItem};