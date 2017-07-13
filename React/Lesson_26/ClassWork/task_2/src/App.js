import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserList from './views/UserList'

class App extends Component {

  onShowUsersBtn() {
    this.props.onShowUsers();
  }
  render() {
    let showUserList;
    if (this.props.usersStore) {
      showUserList = <div ><UserList users={this.props.usersStore} /></div>
    }
    return (
      <div >
          <div >
            <button onClick={this.onShowUsersBtn.bind(this)}>Show users store</button>
            {showUserList}
          </div>
      </div>
    );
  }
}

export default connect(
  users => (
    {
      usersStore: users
    }
  ),
  dispatch => (
    {
      onShowUsers: () => {
        dispatch({ type: "SHOW-USERS" })
      }
    }
  )
)(App);