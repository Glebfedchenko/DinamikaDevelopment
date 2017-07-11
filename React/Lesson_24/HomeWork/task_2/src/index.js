import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home.js';
import Table from './TableView.js';
import List from './ListView.js';

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Home />
                    <Switch>
                        <Route path="/tableView" component={Table} />
                        <Route path="/listView" component={List} />
                        <Redirect from="*" to="/" />
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);