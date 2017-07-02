import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src:'',
        }
    }
    load(){
        return new Promise(function(resolve,reject){
            resolve();
            reject();
        })
    }
    render() {
        return (
            <div>
            <button onClick={this.getImage}>Get Image</button>
        </div>
        );
    }
}

export default App;