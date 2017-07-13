import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserList from './views/UserList'
import {asyncGetTasks} from './actions/async';
class App extends Component {

    onShowUsersBtn() {
        this.props.onShowUsers ();
    }
    componentWillMount(){
        this.props.onGetTasks();
    }
    render() {
        let showUserList;
        if (this.props.usersStore) {
            showUserList = <div className="well"><UserList users={this.props.usersStore}/></div>
        }
        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading panel-primary">Lesson 25. Redux app to show users array from store
                    </div>
                    <div className="panel-body">
                        <button className="btn btn-primary" onClick={this.onShowUsersBtn.bind (this)}>Show users store</button>
                            {showUserList}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect (
    users => (
    {
        usersStore: users
    }
    ),
    dispatch => (
    {
        onShowUsers: ()=> {
            dispatch ({type: "SHOW-USERS"})
        },
        onGetTasks:()=>{
            dispatch(asyncGetTasks())
        }
    }
    )
) (App);