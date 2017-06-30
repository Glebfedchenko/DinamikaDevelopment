import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            time:0
        }
    }
    tick(){
       this.setState({time:new Date() - this.props.start})
    }
    componentDidMount() {
        this.timer = setInterval(this.tick,50);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render() {
        let time =Math.round(this.state.time/100);
        let seconds = (time/10).toFixed(1);
        return (
            <div>
                <h1>This app was started <span>{seconds} seconds</span>ago</h1>
            </div>
        );
    }
}

export default App;