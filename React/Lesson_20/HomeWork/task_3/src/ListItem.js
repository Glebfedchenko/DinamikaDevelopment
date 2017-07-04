import React, { Component } from 'react';

class ListItem extends Component {
    render() {
        return (
            <li key={this.props.index}>{this.props.name} {this.props.gender}</li>
        );
    }
}

export default ListItem;