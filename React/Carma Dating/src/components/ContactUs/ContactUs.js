import React, { Component } from 'react';

class ContactUs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            passwordConfirm: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        e.target.classList.add("active");

        this.setState({
            [e.target.name]: e.target.value
        });

        this.showInputError(e.target.name);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.showFormErrors()) {
            console.log("form is invalid: do not submit");
        } else {
            console.log("form is valid: submit");
        }
    }

    showFormErrors() {
        const inputs = document.querySelectorAll("input");
        let isFormValid = true;

        inputs.forEach(input => {
            input.classList.add("active");

            const isInputValid = this.showInputError(input.name);

            if (!isInputValid) {
                isFormValid = false;
            }
        });

        return isFormValid;
    }

    showInputError(refName) {
        const validity = this.refs[refName].validity;
        const label = document.getElementById(`${refName}Label`).textContent;
        const error = document.getElementById(`${refName}Error`);
        const isPassword = refName.indexOf("password") !== -1;

        if (!validity.valid) {
            if (validity.valueMissing) {
                error.textContent = `${label} is a required field`;
            } else if (validity.typeMismatch) {
                error.textContent = `${label} should be a valid email address`;
            } else if (isPassword && validity.patternMismatch) {
                error.textContent = `${label} should be longer not longer than 25 characters`;
            }
            return false;
        }

        error.textContent = "";
        return true;
    }

    render() {
        return (
            <section id='contactsection'>
                <div className="container">
                <h1 id='cu' className='text-center'>Contact Us</h1>
                    <form noValidate>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label id="passwordLabel">Name</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="password"
                                    ref="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    pattern=".{1,25}"
                                    required
                                    placeholder='Name'
                                />
                                <div className="error" id="passwordError" />
                            </div>
                            <div className="form-group">
                                <label id="usernameLabel">Email</label>
                                <input
                                    className="form-control"
                                    type="email"
                                    name="username"
                                    ref="username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                    required
                                    pattern='(\w+)\@(\w+)\.[a-zA-Z]/g'
                                    placeholder='Enter Email'
                                />
                                <div className="error" id="usernameError" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label id="passwordConfirmLabel">Message</label>
                                <input id='textarea'
                                    className="form-control"
                                    type="text"
                                    name="passwordConfirm"
                                    ref="passwordConfirm"
                                    value={this.state.passwordConfirm}
                                    onChange={this.handleChange}
                                    placeholder='Your message'
                                    pattern='.{1,140}'
                                    required
                                />
                                <div className="error" id="passwordConfirmError" />
                            </div>
                        </div>
                    </form>
                </div>
                <div className='text-center'>
                    <button id='contactbutton' className="btn btn-lg " onClick={this.handleSubmit}>
                        SUBMIT
          </button>
                </div>
            </section>
        );
    }
}

export default ContactUs;

