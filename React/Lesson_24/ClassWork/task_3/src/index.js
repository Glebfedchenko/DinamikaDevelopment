import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import View1 from './View1';
import View2 from './View2';

ReactDOM.render(<Router>
    <div className="App">
    <Switch>
        <Route path='/' component={App}></Route>
        <Route exact path='/View1' component={View1}></Route>
        <Route exact path='/View2' component={View2}></Route>
        <Redirect from='*' to='/'></Redirect>
        </Switch>
    </div>
</Router>,
    document.getElementById('root'));