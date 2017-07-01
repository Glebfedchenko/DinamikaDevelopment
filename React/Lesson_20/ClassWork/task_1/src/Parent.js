import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
    state = {}
    render() {
        return (
            <div>
                <h1> Parent Component</h1>
                <Child />
            </div>
        );
    }
}

export default Parent;