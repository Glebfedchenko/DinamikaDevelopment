import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import taskStore from './stores/appStore'
import App from './App';

ReactDOM.render (
    <Provider store={taskStore}>
        <App />
    </Provider>, document.getElementById ('root'));