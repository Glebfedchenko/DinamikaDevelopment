import React, { Component } from 'react';

var users = [{ name: "Anne Montgomery", gender: "Female" },
{ name: "Annie George", gender: "Female" },
{ name: "Gary Butler", gender: "Male" },
{ name: "Lisa Mendoza", gender: "Female" },
{ name: "Marilyn Henry", gender: "Female" },
{ name: "Johnny Tucker", gender: "Male" },
{ name: "Chris Jacobs", gender: "Male" },
{ name: "Benjamin James", gender: "Male" }]

class App extends Component {
    state = {}
    render() {
        return (
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {users.map((user, index) => {
                                return <p key={index}>{user.name}</p>;
                            })}
                        </td>
                        <td>
                            {users.map((user, index) => {
                                return <p key={index}>{user.gender}</p>;
                            })}
                        </td>

                    </tr>
                </tbody>
            </table>

        );
    }
}

export default App;