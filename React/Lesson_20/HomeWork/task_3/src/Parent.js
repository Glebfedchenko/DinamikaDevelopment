import React, { Component } from 'react';
import InTable from './InTable';
import InList from './InList';

var users = [{name:"Anne Montgomery",gender:"Female"},
    {name:"Annie George",gender:"Female"},
    {name:"Gary Butler",gender:"Male"},
    {name:"Lisa Mendoza",gender:"Female"},
    {name:"Marilyn Henry",gender:"Female"},
    {name:"Johnny Tucker",gender:"Male"},
    {name:"Chris Jacobs",gender:"Male"},
    {name:"Benjamin James",gender:"Male"}];

class Parent extends Component {
    state = {
        current: true
    }

    handleClick(event){
        this.setState({current:!this.state.current})
    }
    render() {
        return (
            <div>
                {this.state.current == true ? (
                    <InTable items={users}/>
                ) : this.state.current == false ? (
                    <InList />
                ) : null}
                TABLE / LIST<input type="checkbox" onClick={this.handleClick.bind(this)} />
            </div>
        );
    }
}

export default Parent;