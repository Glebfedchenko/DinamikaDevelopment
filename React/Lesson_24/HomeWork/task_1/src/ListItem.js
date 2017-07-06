import React, { Component } from 'react';

class ListItem extends Component {
    render() {
        return (
            <li key={this.props.index}>{this.props.name} {this.props.surname}</li>
        );
    }
}

export default ListItem;