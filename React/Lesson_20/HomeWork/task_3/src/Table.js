import React, { Component } from 'react';
import TableItem from './TableItem';

var users = [{name:"Anne Montgomery",gender:"Female"},
    {name:"Annie George",gender:"Female"},
    {name:"Gary Butler",gender:"Male"},
    {name:"Lisa Mendoza",gender:"Female"},
    {name:"Marilyn Henry",gender:"Female"},
    {name:"Johnny Tucker",gender:"Male"},
    {name:"Chris Jacobs",gender:"Male"},
    {name:"Benjamin James",gender:"Male"}];

class Table extends Component {
    render() {
        return (
            <table>
                <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Gender
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map(function(user, index) {
                        return <TableItem key={index} name={user.name} gender={user.gender} />
                    })
                }
                </tbody>
            </table>
        );
    }
}

export default Table;