import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            tel: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        e.target.classList.add('active');

        this.setState({
            [e.target.name]: e.target.value
        });

        this.showInputError(e.target.name);
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('component state', JSON.stringify(this.state));

        if (!this.showFormErrors()) {
            console.log('form is invalid: do not submit');
        } else {
            console.log('form is valid: submit');
        }
    }

    showFormErrors() {
        const inputs = document.querySelectorAll('input');
        let isFormValid = true;

        inputs.forEach(input => {
            input.classList.add('active');

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
        const isPassword = refName.indexOf('password') !== -1;
        const isPasswordConfirm = refName === 'tel';

        if (!validity.valid) {
            if (validity.valueMissing) {
                error.textContent = `${label} is a required field`;
            } else if (validity.typeMismatch) {
                error.textContent = `${label} should be a valid email address`;
            } else if (isPassword && validity.patternMismatch) {
                error.textContent = `${label} should be longer than 4 chars`;
            } else if (isPasswordConfirm && validity.patternMismatch) {
                error.textContent = 'Please input phone correctly';
            }
            return false;
        }

        error.textContent = '';
        return true;
    }
    render() {
        return (
            <form novalidate>
                <div className="form-group">
                    <label id="passwordLabel">Username</label>
                    <input className="form-control"
                        type="password"
                        name="password"
                        ref="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        pattern=".{5,}"
                        required />
                    <div className="error" id="passwordError" />
                </div>
                <div className="form-group">
                    <label id="usernameLabel">E-mail</label>
                    <input className="form-control"
                        type="email"
                        name="username"
                        ref="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        required />
                    <div className="error" id="usernameError" />
                </div>
                <div className="form-group">
                    <label id="passwordConfirmLabel">Phone Number</label>
                    <input className="form-control"
                        type="password"
                        name="passwordConfirm"
                        ref="passwordConfirm"
                        value={this.state.passwordConfirm}
                        onChange={this.handleChange}
                        pattern="\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}"
                        required />
                    <div className="error" id="passwordConfirmError" />
                </div>
                <button className="btn btn-primary"
                    onClick={this.handleSubmit}>submit</button>
            </form>
        );
    }
}

export default Form;