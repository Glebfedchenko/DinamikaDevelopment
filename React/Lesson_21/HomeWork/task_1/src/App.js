import React, { Component } from 'react';

class App extends Component {
constructor(){
    super();
    this.state ={
        count:0
    }
    this.handleDown = this.handleDown.bind(this);
    this.handleUp = this.handleUp.bind(this);
}

     handleUp(){
         this.setState({count:this.state.count + 1})
     }
     handleDown(){
         this.setState({count:this.state.count - 1})
     }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button className="btn btn-primary" onClick={this.handleUp}>+</button>
                <button className="btn btn-danger" onClick={this.handleDown}>-</button>
            </div>
        );
    }
}

export default App;