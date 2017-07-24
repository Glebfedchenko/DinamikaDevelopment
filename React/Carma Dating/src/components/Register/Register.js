import React, { Component } from 'react';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signup: false,
            login: true
        }
    }
    switch(word) {
        var signup, login;
        if (word === "signup") {
            signup = true;
            login = false;
        } else {
            login = true;
            signup = false;
        }
        return this.setState({ login: login, signup: signup });
    }

    render() {
        return (
            <div id='registersection' className='container'>
                <form>
                    <div className='col-md-6 col-xs-6 col-sm-6 text-right' >
                        <button id="loginButton"
                            onClick={this.switch.bind(this, "login")}
                            className={this.state.login ? "now" : "sleep"}
                        >LOGIN</button>

                    </div>
                    <div className='col-md-6 col-xs-6 col-sm-6 text-left'>
                        <button id="signupButton"
                            onClick={this.switch.bind(this, "signup")}
                            className={this.state.signup ? "now" : "sleep"}
                        >
                            SIGN IN
                        </button>
                    </div>

                    {this.state.signup ? <Signup /> : null}
                    {this.state.login ? <Login /> : null}
                </form>
            </div>
        )
    }
}

const Signup = () => {
    return (
        <div>
            <div id="regsignup">
                <div className="form-group" id="activelabel">
                    <input type="text" className='form-control' id="first" placeholder="First Name" />
                </div>
                <div className="form-group" id="activelabel">
                    <input type="text" className='form-control' id="last" placeholder="Last Name" />
                </div>
                <div className="form-group" id="activelabel">
                    <input type="email" className='form-control' id="email" placeholder="Email" />
                </div>
                <div className="form-group" id="activelabel">
                    <input type="password" className='form-control' id="password" placeholder="Password" />
                </div>
                <div className="form-group" id="activelabel">
                    <input type="password" className='form-control' id="confirm" placeholder="Confirm Password" />
                </div>
                <div className='text-center'>
                    <button id="sends">SUBMIT</button>
                </div>
            </div>
        </div>
    )
}
const Login = () => {
    return (
        <div>
            <div id="reglogin" className='text-center'>
                <div className="form-group" id="activelabel">
                    <input className='form-control' type="email" id="email" placeholder="Email" />
                </div>
                <div className="form-group" id="activelabel">
                    <input className='form-control' type="password" id="password" placeholder="Password" />
                </div>
                <button id="send">SUBMIT</button>
                <p className='text-center' role='button'>Forgot Password?</p>
            </div>
        </div>
    )
}

export default Register;