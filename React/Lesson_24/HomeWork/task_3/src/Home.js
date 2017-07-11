import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render(){
        return (
            <div>
               <Link to='/tableView'> <button className='btn btn-primary'>Table</button></Link>
               <Link to='/listView'><button className='btn btn-danger'>List</button></Link>
            </div>
        )
    }
}