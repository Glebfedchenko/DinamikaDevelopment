import React, { Component } from 'react';

class App extends Component {
    state = {}
    render() {
        var styles = {
            h1: { color: "green", fontSize: "100px" },
        };
        return (
            <div>
                <h1 style={styles.h1}>Hello World</h1>
                <h2 style={this.props.h2}>Hello World</h2>
            </div>

        );
    }
}

export default App;