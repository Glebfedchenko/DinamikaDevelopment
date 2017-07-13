import React, { Component } from 'react';

class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <div><h3>List of users</h3></div>
                <div>
                    <ul>
                        {this.props.users.map((item, index, arr) => {
                            let element;
                            element =
                                <li key={index}>
                                        <span>First name:</span> {item.first_name}. 
                                        <span>Last name:</span> {item.last_name}</li>
                            return element;
                        }
                        )}
                    </ul>
                    <br />
                </div>
            </div>
        );
    }
}

export default UserList;