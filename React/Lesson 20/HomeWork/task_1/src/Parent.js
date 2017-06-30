import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
    constructor(props){
        super(props);
        this.state ={
            search:''
        }
        this.updateSearch = this.updateSearch.bind(this);
    }
    updateSearch(event){
        this.setState({search:event.target.value});
    }
    render() {
        
        return (
            <div>
                <input type="text" 
                value={this.state.search}
                onChange={this.updateSearch}/>
                <Child />
            </div>
        );
    }
}

export default Parent;