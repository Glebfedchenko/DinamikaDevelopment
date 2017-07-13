import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App';


const initialState = [
    'Go for a walk',
    'Do the job'
]

function list(state = initialState, action) {
    if (action.type === 'ADD') {
        return [
            ...state,
            action.payload
        ];
    }
    return state;
}

const store = createStore(list);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);