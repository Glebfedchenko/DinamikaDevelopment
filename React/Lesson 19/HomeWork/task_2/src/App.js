import React, { Component } from 'react';

class App extends Component {

    render() {
        return (
            <form action="">
                <label for="name" />
                <input
                    type="text"
                    placeholder="Type your name"
                    className="form-control"
                />
                <label for="login" />
                <input
                    type="text"
                    placeholder="Type your login"
                    className="form-control"
                />
                <button className='btn btn-primary'>Submit</button>
            </form>
        );
    }
}

export default App;