import React, {Component} from 'react';
import {connect} from 'react-redux';
import TaskList from './views/TaskList'
import TaskTable from './views/TaskTable'
import {asyncGetTasks} from './actions/async';

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
        this.store = this.props.tasksStore;

        if (this.props.tasksStore) {
            if (this.state.displayTypeText === 'table') {
                displayUsers = <div className="well"><TaskList users={this.props.tasksStore} onDelete={this.deleteTask.bind(this)} onAdd={this.addTask.bind(this)} /></div>

            } else {
                displayUsers = <div className="well"><TaskTable users={this.props.tasksStore} onDelete={this.deleteTask.bind(this)} onAdd={this.addTask.bind(this)}/></div>
            }
        }



        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading panel-primary">
                    </div>
                    <div className="panel-body">

                        <button className="btn btn-primary" onClick={this.toggleDisplayType.bind (this)}>
                            Show {this.state.displayTypeText}</button>
                        <button className="btn btn-primary" onClick={this.props.onGetTasks}>get tasks</button>

                        {displayUsers}
                    </div>
                </div>
            </div>
        );
    }

}

// export default App;
export default connect (
    tasks => (
    {
        tasksStore: tasks
    }
    ),
    dispatch => (
    {
        onShowTask: ()=> {
            dispatch ({type: "SHOW-TASKS"})
        },
        onAddTask: (task)=> {
            dispatch ({type: "ADD-TASK", task: task})
        },
        onDeleteTask: (id)=> {
            dispatch ({type: "DELETE-TASK", id: id})
        },
        onGetTasks:()=>{
            dispatch(asyncGetTasks())
        }
    })

) (App);
