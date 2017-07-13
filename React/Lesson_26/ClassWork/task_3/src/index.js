import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import textStore from './stores/appStore'
import App from './App';

ReactDOM.render (
    <Provider store={textStore}>
        <App />
    </Provider>, document.getElementById ('root'));