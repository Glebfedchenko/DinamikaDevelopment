import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class View1 extends Component {
    render() {
        return (
            <div>
            <h1>This is View1</h1>
            <Link to="/View2">Go To View2 </Link>
            </div>      
        );
    }
}

export default View1;