import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import View1 from './View1';
import View2 from './View2';

ReactDOM.render(<Router>
    <div className="App">
        <Route exact path='/View1' component={View1}></Route>
        <Route exact path='/View2' component={View2}></Route>
    </div>
</Router>,
    document.getElementById('root'));