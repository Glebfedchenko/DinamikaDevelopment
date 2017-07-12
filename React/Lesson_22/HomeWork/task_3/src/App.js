import React, {Component} from 'react';
import UserTable from './User';

class Person {
    constructor(firstName, lastName, age, gender) {
        [this.firstName = "John", this.lastName = "Doe", this.age = 0, this.gender = "Male"] = [...arguments];
    }

    get fullName() {return this.firstName + ' ' + this.lastName;}

    sayHi() {
        alert ('Hello, my name is ' + this.fullName);
    }
}


class User extends Person {
    constructor(signUpDate, id) {
        super ();
        [this.signUpDate = 0, this.id] = [...arguments];
    }
}


class App extends Component {


    createUsers() {

        let users = [];
        users[0] = new User ('12/08/2013', '12');
        users[1] = new User ('14/09/2014', '10');
        users[2] = new User ('16/10/2015', '8');


        Object.assign(users[0], {
            firstName: 'Bugs',
            lastName: 'Bunny',
            age: '99',
            gender: 'male'
        });

        Object.assign(users[1], {
            firstName: 'Lola',
            lastName: 'Bunny',
            age: '99',
            gender: 'female'

        });
        Object.assign(users[2], {
            firstName: 'Lion',
            lastName: 'King',
            age: '100',
            gender: 'male'

        });

        return users
    }

    componentWillMount() {
        this.users = this.createUsers ();
    }


    render() {

        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-body">
                        <UserTable users={this.users}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;