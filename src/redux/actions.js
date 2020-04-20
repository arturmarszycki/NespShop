const DB = 'http://localhost:3000/shop';

const GET_DATA = 'GET_DATA';

const fetchData = () => dispatch => {
    fetch(DB).then(response => {
        return response.json();
    }).then(result => {
        dispatch({type: GET_DATA, result});
    }).catch(error => {
        console.log(error);
    })
};

export {GET_DATA, fetchData};