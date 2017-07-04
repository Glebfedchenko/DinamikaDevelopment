import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src: "",
            get: './image.jpg'
        }
    }
    getImage() {
        let url = this.state.get;
        return new Promise(function (resolve, reject) {
            var img = new Image();
            img.onload = function () {
                return resolve(url);
            }
            img.onerror = function () {
                return reject(alert("Failed to load image"));
            }
            img.src = url;
        }).then(
            this.setState({
                src: url
            })
        );
    }
    render() {
        return (
            <div>
                <button onClick={this.getImage.bind(this)}>Get Image</button>
                <img src={this.state.src} alt="" />
            </div>
        );
    }
}

export default App;