import {combineReducers} from 'redux';
import todoStore from './TodoReducer';
import aboutStore from './AboutReducer';



export default combineReducers({
    todoStore,
    aboutStore
})




