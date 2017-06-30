import React, { Component } from 'react';

class App extends Component {

    render() {
        return (
            <h1>
                The result of suming 2 and 3 = {this.props.n1 + this.props.n2}
            </h1>

        );
    }
}

export default App;