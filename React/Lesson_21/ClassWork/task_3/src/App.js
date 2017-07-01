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
    startTimer() {
        clearInterval(this.timer)
        this.timer = setInterval(this.tick.bind(this), 1000)
    }
    stopTimer() {
        clearInterval(this.timer)
    }
    resetTimer() {
        this.setState({ time: 0 });
    }
    render() {
        return (
            <div className="timer">
                <h1>{this.state.time}</h1>
                <button onClick={this.startTimer.bind(this)} className="btn btn-primary">START</button>
                <button onClick={this.resetTimer.bind(this)} className="btn btn-danger">RESET</button>
                <button onClick={this.stopTimer.bind(this)} className="btn btn-primary">STOP</button>
            </div>
        );
    }
}

export default App;