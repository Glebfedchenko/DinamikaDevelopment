import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import Table from './TableView.js';
import List from './ListView.js';
import About from './About.js';

class App extends React.Component {
  render() {
    return (
      <Router><div>
        <Home />
        <Switch>
          <Route exact path="/tableView" component={Table} />
          <Route exact path="/listView" component={List} />
          <Route path="/listView/:id" component={About} />
          <Route path='/tableView/:id' component={About} />

        </Switch>
      </div>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);