import React, { Component } from 'react';
var a = require('../../Assets/img/femaleusers.png')
var b = require('../../Assets/img/happycouples.png')
var c = require('../../Assets/img/maleusers.png')
class Info extends Component {
    constructor() {
        super();
        this.state = {
            info: [
                { id: 1, name: 'Female users', status: 'OVER 5000' },
                { id: 2, name: 'Happy couples', status: 'OVER 9000'},
                { id: 3, name: 'Male users', status: 'OVER 4000'}
            ]
        }
    }
    render() {
        return (
            <section id='infosection'>
                <div className="container text-center" id='infocontainer'>
                    <div className="col-md-4 text-center">
                        <img src={a} alt="" />
                        <h1>{this.state.info[0].status}
                        </h1>
                        <p>{this.state.info[0].name}</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <img src={b} alt="" />

                        <h1>{this.state.info[1].status}
                        </h1>
                        <p>{this.state.info[1].name}</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <img src={c} alt="" />

                        <h1>{this.state.info[2].status}
                        </h1>
                        <p>{this.state.info[2].name}</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Info;