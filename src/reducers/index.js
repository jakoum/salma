import {combineReducers} from 'redux'
import itemReducers from './itemReducers';

export default combineReducers({
    item:itemReducers
    
});
console.log("kk")