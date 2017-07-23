import React, { Component } from 'react';

class JoinUs extends Component {
    state = {}
    render() {
        return (
            <section id='joinussection'>
                <div className="container text-center">
                    <h1>JOIN US NOW</h1>
                    <button id='createaccount' className='btn btn-lg'>CREATE AN ACCOUNT</button>
                </div>
            </section>
        );
    }
}

export default JoinUs;