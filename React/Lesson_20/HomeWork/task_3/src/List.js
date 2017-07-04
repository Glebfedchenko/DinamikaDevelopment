import React, { Component } from 'react';
import ListItem from './ListItem';

var users = [{name:"Anne Montgomery",gender:"Female"},
    {name:"Annie George",gender:"Female"},
    {name:"Gary Butler",gender:"Male"},
    {name:"Lisa Mendoza",gender:"Female"},
    {name:"Marilyn Henry",gender:"Female"},
    {name:"Johnny Tucker",gender:"Male"},
    {name:"Chris Jacobs",gender:"Male"},
    {name:"Benjamin James",gender:"Male"}];

class List extends Component {
    state = {  }
    render() {
        return (
            <ul>
                {users.map((user,index)=>{
                    return(
                        <ListItem key={index} name={user.name} gender={user.gender}/>
                    )
                })}
            </ul>
        );
    }
}
export default List;


