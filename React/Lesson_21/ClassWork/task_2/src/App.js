import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0
        }
    }
    componentDidMount() {
        this.timer = setInterval(this.tick.bind(this), 1000)
    }
    tick() {
        this.setState({ time: this.state.time + 1 });
    }
    render() {
        return (
            <div className="timer">
                <h1>{this.state.time}</h1>
            </div>
        );
    }
}

export default App;