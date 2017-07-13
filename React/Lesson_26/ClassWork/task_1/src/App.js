import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

    add() {
        console.log('add', this.userInput.value);
        this.props.onAdd(this.userInput.value);
        this.userInput.value = '';

    }
    render() {
        console.log(this.props.testStore);
        return (
            <div>
                <input type="text" ref={(input) => { this.userInput = input }} />
                <button onClick={this.add.bind(this)}>Add</button>
                {this.props.testStore.map((i, index) => {
                    return (
                        <h1 key={index}>{i}</h1>
                    )
                })}
            </div>

        );
    }
}

export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({
        onAdd: (userText) => {
            dispatch({
                type: 'ADD', payload: userText
            })
        }
    })
)(App);