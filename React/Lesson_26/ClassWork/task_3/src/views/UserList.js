import React, {Component} from 'react';

class UserList extends Component {

    constructor(props){
        super(props);
        this.state = {
            dataClassName:'openUp',
            msgClassName:'alert alert-info closeUp',
            msg:'please, wait... getting data',
        }
    }

    render() {
        return (
            <div className="panel panel-success">


                <div className="panel-heading"><h3>List of users</h3></div>
                <div className="panel-body">
                    <div className={this.state.msgClassName}>{this.state.msg}</div>
                    <ol className={this.state.dataClassName}>
                        {this.props.users.map ((item, index, arr)=> {
                                let element;
                                element =
                                    <li className="list-group-item list-group-item-success" key={index}> {index + 1}.
                                        <span
                                            className="listLabel">First name:</span> {item.first_name}. <span
                                            className="listLabel">Last name:</span> {item.last_name}</li>
                                return element;
                            }
                        )}
                    </ol>
                    <br/>
                </div>
            </div>
        );
    }
}

export default UserList;