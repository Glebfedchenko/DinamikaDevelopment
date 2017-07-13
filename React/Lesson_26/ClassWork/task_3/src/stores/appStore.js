import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

function inputData(users=[], action) {


    if ( action.type === "SHOW-USERS" ) {

        return users;
    }

    if ( action.type === "UPLOAD-USERS" ) {
        return action.payload;
    }


}


const textStore = createStore (inputData,composeWithDevTools(applyMiddleware(thunk)));

export default textStore;