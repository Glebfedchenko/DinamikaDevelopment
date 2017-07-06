import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TableItem from './TableItem';

var users = [{ first_name: "Matthew", last_name: "Phillips", email: "mphillips0@myspace.com", gender: "Male", ip_address: "14.241.172.154", id: 23468 },
{ first_name: "Larry", last_name: "Weaver", email: "lweaver1@slideshare.net", gender: "Male", ip_address: "126.139.9.128", id: 89078 },
{ first_name: "Barbara", last_name: "Tucker", email: "btucker2@cbc.ca", gender: "Female", ip_address: "92.195.229.16", id: 56435 },
{ first_name: "Jonathan", last_name: "Cook", email: "jcook3@fc2.com", gender: "Male", ip_address: "187.79.225.71", id: 78908 },
{ first_name: "Jean", last_name: "Flores", email: "jflores4@last.fm", gender: "Female", ip_address: "222.197.158.249, id:67653" },
{ first_name: "Kimberly", last_name: "Nelson", email: "knelson5@nifty.com", gender: "Female", ip_address: "111.174.89.57", id: 83425 },
{ first_name: "Willie", last_name: "Banks", email: "wbanks6@abc.net.au", gender: "Male", ip_address: "97.0.19.154", id: 99873 },
{ first_name: "Michael", last_name: "King", email: "mking7@w3.org", gender: "Male", ip_address: "149.114.62.6", id: 34239 }]

class TableView extends Component {
    render() {
        return (
            <div>
                <h1>TableView</h1>
                <table className="table table-bordered">
                    <thead>                
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Gender</td>
                    </tr>
                    </thead>
                    <tbody>
                            {users.map((user,index)=>{
                                return(
                                    <TableItem key={index} name={user.first_name} surname={user.last_name} gender={user.gender}/>
                                )
                            })}
                    </tbody>
                </table>
                <Link to="/"><button className="btn btn-danger">GO BACK</button></Link>
            </div>
        );
    }
}

export default TableView;