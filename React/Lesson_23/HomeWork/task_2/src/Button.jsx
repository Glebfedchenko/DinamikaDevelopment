import React, { Component } from 'react';

class Button extends Component {
    addUser(){
        alert('user added')
    }
    render() {
        return <button onClick={this.addUser.bind(this)}>Add new user</button>
    }
}

export default Button;