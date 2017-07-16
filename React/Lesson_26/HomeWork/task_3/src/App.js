import React, {Component} from 'react';
import './style/App.css';
import {connect} from 'react-redux';
import TaskList from './views/TaskList'
import {asyncGetTasks} from './actions/async';
import {Link} from 'react-router';

class App extends Component {

    constructor() {
        super ();
        this.state = {
            displayTypeText: 'table',
            displayElement: ''
        }
    }

    toggleDisplayType() {

        if (this.state.displayTypeText === 'table') {
            this.setState ({displayTypeText: 'list'});
        } else {
            this.setState ({displayTypeText: 'table'});
        }
    }

    deleteTask(id) {
        this.props.onDeleteTask (id);
    }

    addTask(task) {
        this.props.onAddTask (task)
    }

    componentWillMount(){
        this.props.onGetTasks();
    }


    render() {
        let displayUsers;
        displayUsers = <div className="well"><TaskList users={this.props.tasksStore} onDelete={this.deleteTask.bind(this)} onAdd={this.addTask.bind(this)} /></div>




        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading panel-primary">
                    </div>
                    <div className="panel-body">
                       <div className="form-group">
                            <div className="btn-group">
                        <Link to="/edit"><button className="btn btn-danger btn-sm"> EDIT TASK LIST</button></Link>
                        <Link to="/about"><button className="btn btn-success btn-sm">ABOUT</button></Link>
                            </div>
                        </div>
                        {displayUsers}
                    </div>
                </div>
            </div>
        );
    }

}

export default connect (
    stores => (
    {
        tasksStore: stores.todoStore,
    }
    ),
    dispatch => (
    {
        onGetTasks:()=>{
            dispatch(asyncGetTasks())
        }
    })

) (App);
