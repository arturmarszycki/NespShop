import {ADD_INFO} from '../actions/machineActions';

const machine = (state = {}, action) => {
    switch (action.type) {
        case ADD_INFO:
            return action.info;
        default:
            return state;
    }
}

export default machine;