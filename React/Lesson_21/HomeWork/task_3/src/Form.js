import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log('Form Submitted');
    }
    handleEmailChange(event) {
        this.setState({ email: event.target.value })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className='text-center'>
                <div>
                    <label htmlFor="Name">Name</label>
                </div>
                <input
                    id='Name'
                    type="text"
                    placeholder="Name"
                    value={this.state.name} />
                <div>
                    <label htmlFor="Email">Email</label>
                </div>
                <input
                    id='Email'
                    type="text"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleEmailChange} />
                <div>
                    <label htmlFor="Email">Phone Number</label>
                </div>
                <input
                    id='Email'
                    type="text"
                    placeholder="Email"
                    value={this.state.phone}
                    onChange={this.handleEmailChange} />
                <div>
                    <button>Submit</button>
                </div>
            </form>
        );
    }
}

export default Form;