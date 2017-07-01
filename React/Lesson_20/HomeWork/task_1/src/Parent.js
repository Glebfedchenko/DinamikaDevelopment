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

class Parent extends Component {
    state = {
        items: users
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
                    <tbody>
                        <td>
                            {this.state.items.map((el, i) => {
                                return <Child key={i} name={el.name} />
                            })}
                        </td>
                        <td>
                                                    {this.state.items.map((el,i)=>{
                            return  <Child key={i} name={el.gender}/>
                        })}
                        </td>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Parent;