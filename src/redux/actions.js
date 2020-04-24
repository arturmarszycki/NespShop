const DB = 'http://localhost:3000/shop';

const GET_DATA = 'GET_DATA';
const fetchData = () => dispatch => {
    fetch(DB).then(response => {
        return response.json();
    }).then(result => {
        dispatch({type: GET_DATA, result});
    }).catch(error => {
        console.log(error);
    });
};

const ADD_TO_CART = 'ADD_TO_CART';
const addToCart = item => ({type: ADD_TO_CART, item});

export {GET_DATA, ADD_TO_CART, fetchData, addToCart};