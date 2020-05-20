import {combineReducers} from 'redux';
import shop from './shopReducers';
import machine from './machineReducers';

export default combineReducers({shop, machine});