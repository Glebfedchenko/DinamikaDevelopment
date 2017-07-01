import React, { Component } from 'react';

class Child extends Component {
    state = {  }
    render() {
        return (
           <li style={{listStyleType:'none'}} key={this.props.index}>{this.props.name}{this.props.gender}</li>
        );
    }
}

export default Child;