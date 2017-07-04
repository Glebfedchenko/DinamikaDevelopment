import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <div>
                <h2>App Component</h2>
                <Link to="/View1" >View1</Link>
                <Link to="/View2">View2</Link>
            </div>
        );
    }
}

export default App;
