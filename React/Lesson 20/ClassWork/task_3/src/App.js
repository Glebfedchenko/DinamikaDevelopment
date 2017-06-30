import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false
        }
        this.handleStatus = this.handleStatus.bind(this);
    }
    handleStatus() {
        this.setState({ status: !this.state.status })
    }
    render() {
        let a = this.state.status ?
            <div style={{ backgroundColor: 'blue', border: '3px solid yellow' }}>Hello</div> :
            <div style={{ backgroundColor: 'yellow', border: '3px solid green' }}>World</div>;
        return (
            <div>
                <input type="checkbox" checked={this.state.status} onChange={this.handleStatus} />
                {a}
            </div>
        );
    }
}

export default App;