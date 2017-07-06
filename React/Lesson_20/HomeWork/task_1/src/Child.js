import React, { Component } from 'react';

class Child extends Component {
    state = {}
    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.gender}</td>
            </tr>
        );
    }
}

export default Child;