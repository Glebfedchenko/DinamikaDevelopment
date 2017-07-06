import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <div>
                <h2>This is the homepage!</h2>
                <Link to="/TableView" ><button className="btn btn-primary">TableView</button></Link>
                <Link to="/ListView"><button className="btn btn-danger">ListView</button></Link>
            </div>
        );
    }
}

export default App;
