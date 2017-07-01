import React, { Component } from 'react';
import Child from './Child';

var users = [{ name: "Anne Montgomery", gender: "Female" },
{ name: "Annie George", gender: "Female" },
{ name: "Gary Butler", gender: "Male" },
{ name: "Lisa Mendoza", gender: "Female" },
{ name: "Marilyn Henry", gender: "Female" },
{ name: "Johnny Tucker", gender: "Male" },
{ name: "Chris Jacobs", gender: "Male" },
{ name: "Benjamin James", gender: "Male" }];

function getRandomColor() {
    var h = Math.floor(Math.random() * (255 - 1) + 1);
    var s = Math.floor(Math.random() * (100 - 1) + 1) + '%';
    var l = '50%';
    var randomColor = 'hsl(' + h + ',' + s + ',' + l + ')';
    return randomColor;
}
var randomColor = null

class Parent extends Component {
    state = {
        items: users
    }
    componentWillUpdate() {
        randomColor = getRandomColor()
    }
    handlerLimit(event) {
        var searchQuery = event.target.value;
        var limitedItems = users.slice(0, searchQuery);
        this.setState({
            items: limitedItems
        })
    }
    handlerKey(event) {
        if ((event.keyCode < 48 || event.keyCode > 57) && event.keyCode !== 8) {
            event.preventDefault()
        }
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.handlerLimit.bind(this)} onKeyDown={this.handlerKey.bind(this)} /><br />
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Gender</td>
                        </tr>
                    </thead>
                    
                        <th style={{ color: getRandomColor() }}>
                            {this.state.items.map((el, i) => {
                                return <Child  key={i} name={el.name} />
                            })}
                        </th>
                        <th>
                            {this.state.items.map((el, i) => {
                                return <Child key={i} name={el.gender} />
                            })}
                        </th>
                   
                </table>
            </div>
        );
    }
}

export default Parent;