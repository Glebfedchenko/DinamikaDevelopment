import React, { Component } from 'react';
import List from './List';
import Table from './Table';

class App extends Component {
    constructor(props){
        super(props);
        this.state ={
            active: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        this.setState({
            active: !this.state.active
        })
    }
    render() {
        return (
            <div>
                {this.state.active == true ? (
                    <Table />
                ) : this.state.active == false ? (
                    <List />
                ) : null}
                SWITCHER<input type="checkbox" onClick={this.handleClick} />
            </div>
        );
    }
}

export default App;