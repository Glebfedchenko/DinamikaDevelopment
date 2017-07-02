import React, { Component } from 'react';

let options = {
    title: "Menu",
    width: 100,
    height: 200
};

let {
    title: d1,
    width: d2,
    height: d3
} = options;

class App extends Component {
    state = {}
    render() {
        return (
            <div>
                <h5>Title: {d1}</h5>
                <h5>Width : {d2}</h5>
                <h5>Height: {d3}</h5>
            </div>
        );
    }
}

export default App;