import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: 'red'
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        if (this.state.backgroundColor === 'red') {
            this.setState({ backgroundColor: 'black' });
        } else {
            this.setState({ backgroundColor: 'red' });
        }
    }
    render() {
        return (
            <div>
                <button onClick={(e) => { this.handleClick('black') }}>Click</button>
                <div className={this.state.backgroundColor} style={{width:'100%', height:'100px'}}></div>
            </div>
        );
    }
}

export default App;