import React, { Component } from 'react';

class App extends Component {
    render() {
        let a;
        if (this.props.condition === true) {
            a = <h1>{this.props.n1} + {this.props.n2}</h1>
        } else {
            a = <h1>{this.props.n1 + this.props.n2}</h1>
        }
        return (
            <div>
                {a}
            </div>
        );
    }
}

export default App;