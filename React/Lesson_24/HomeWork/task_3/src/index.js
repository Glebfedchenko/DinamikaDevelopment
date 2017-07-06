import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import TableView from './TableView';
import ListView from './ListView';

ReactDOM.render(<Router>
    <div className="App">
        <Route exact path='/' component={App}></Route>
        <Route exact path='/TableView' component={TableView}></Route>
        <Route exact path='/TableView/:id'></Route>
        <Route exact path='/ListView' component={ListView}></Route>
        <Route exact path='/ListView/:id'></Route>

    </div>
</Router>,
    document.getElementById('root'));