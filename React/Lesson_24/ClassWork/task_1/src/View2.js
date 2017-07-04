import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class View2 extends Component {
    state = {}
    render() {
        return (
            <div>
                <h1>This is second View</h1>
                <Link to="/View1">Go To View1 </Link>
            </div>
        );
    }
}

export default View2;