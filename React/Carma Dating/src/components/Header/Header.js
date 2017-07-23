import React, { Component } from 'react';

import JoinUs from '../JoinUs/JoinUs';
import Info from '../Info/Info';
import HappyStories from '../HappyStories/HappyStories';
import ContactUs from '../ContactUs/ContactUs';
import Blog from '../Blog/Blog';
import Members from '../Members/Members';

var Scroll = require('react-scroll');
var Link = Scroll.Link;
var Element = Scroll.Element;



class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaults: ['I am:', 'Seeking a:', 'Age:', 'To:', 'Country:'],
            i: ['Male', 'Female'],
            seek: ['Male', 'Female'],
            age: [18, 21, 25, 27, 30],
            to: ['Marrige', 'Talk', 'Date'],
            country: ['Ukraine', 'Czhech', 'Poland', 'USA'],
            showLogin: false
        }
        this.show = this.show.bind(this);
    }
    show() {
        this.setState({ showLogin: !this.state.showLogin })
    }

    render() {
        const options = (x, index) => {
            return <option key={index}>{x}</option>
        }

        return (
            <div>
                <section id='headersection'>
                    <nav className="navbar navbar-default navbar-fixed-top" id='navigation' role="navigation">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li><Link to="search" spy={true} smooth={true} offset={50} duration={1000} id='mainlogo' href="#">LOGO</Link></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-center">
                                <li><Link to="search" spy={true} smooth={true} offset={50} duration={1000} id='navlinks' href="#">HOME</Link></li>
                                <li><Link to="search" spy={true} smooth={true} offset={50} duration={1000} id='navlinkscol' href="#search">SEARCH</Link></li>
                                <li><Link to="members" spy={true} smooth={true} offset={50} duration={1000} id='navlinks'  href="#">MEMBERS</Link></li>
                                <li><Link to="happy" spy={true} smooth={true} offset={50} duration={1000} id='navlinks'  href="#infosection">EXTRAS</Link></li>
                                <li><Link to="contactus" spy={true} smooth={true} offset={50} duration={1000} id='navlinks' href="#contactsection">CONTACT US</Link></li>
                                <li><Link to="blog" spy={true} smooth={true} offset={50} duration={1000} id='navlinks' href="#">BLOG</Link></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a role='button' onClick={this.show} id='signup' className='navbar-brand' href="#">LOGIN/SIGN UP</a>
                                {this.state.showLogin ? <Login /> : null}</li>
                            </ul>
                        </div>
                    </nav>
                    <Element name='search' className='element'>
                        <div className='allyouneed text-center'>
                            <h1>ALL YOU NEED </h1>
                            <h1>IS <i>LOVE</i></h1>
                        </div>
                    </Element>
                </section>

                <div id='search'>
                    <div className='selections text-center'>
                        <select name="" id="" className='text-left'>
                            <option disabled selected>{this.state.defaults[0]}</option>
                            {this.state.i.map(options)}
                        </select>
                        <select name="" id="">
                            <option disabled selected>{this.state.defaults[1]}</option>
                            {this.state.seek.map(options)}
                        </select>
                        <select name="" id="">
                            <option disabled selected>{this.state.defaults[2]}</option>
                            {this.state.age.map(options)}
                        </select>
                        <select name="" id="">
                            <option disabled selected>{this.state.defaults[3]}</option>
                            {this.state.to.map(options)}
                        </select>
                        <select name="" id="">.
                      <option disabled selected>{this.state.defaults[4]}</option>
                            {this.state.country.map(options)}
                        </select>
                        <button className='btn btn-lg'>SEARCH</button>
                    </div>
                </div>
                <Element name='members' className='element'><Members /></Element>
                <Info />

                <Element name='happy' className='element'><HappyStories /></Element>
                <JoinUs />
                <Element name='blog' className='element'><Blog /></Element>
                <Element name='contactus' className='element'><ContactUs /></Element>


                <div id='footer'>
                    <div className="container" id='footercontainer'>
                        <div className="col-md-5">
                            <h1 id='about'>
                                ABOUT US
                    </h1>
                            <p> We are announcing the
                rebranding of Dating Solutions to
                WP Dating today. We thank all our customers
                 of Dating Solutions and assure you that you will still
                 remain as valued customers. You will still
                 be able to receive the same or better level of products and support</p>
                        </div>
                        <div className="col-md-2" id='footerlinks'>
                            <h3><Link to="search" spy={true} smooth={true} offset={50} duration={1000} href="">Home</Link></h3>
                            <h3><Link to="search" spy={true} smooth={true} offset={50} duration={1000} href="">Search</Link></h3>
                            <h3><Link to="members" spy={true} smooth={true} offset={50} duration={1000} href="">Members</Link></h3>
                        </div>
                        <div className="col-md-2" id='footerlinks'>
                            <h3><Link to="happy" spy={true} smooth={true} offset={50} duration={1000} href="">Extras</Link></h3>
                            <h3><Link to="contactus" spy={true} smooth={true} offset={50} duration={1000} href="">Contact Us</Link></h3>
                            <h3><Link to="happy" spy={true} smooth={true} offset={50} duration={1000} href="">Blog</Link></h3>
                        </div>
                        <div className="col-md-3" >
                            <h3 id='social'>SOCIAL</h3>
                            <ul >
                                <li><a href=""><i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i></a></li>
                                <li><a href=""><i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i></a></li>
                                <li><a href=""><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a></li>
                            </ul>
                            <p id='copy'>Copyright @ Karma Dating 2017</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;

const Login = () => {
    return (
        <div className='forma'>
            <form >
                <div className="row" id='mm'>
                    <div className="col-md-6 text-right"><a id='activea' href="">LOGIN</a></div>
                    <div className="col-md-6 text-left"><a href="">SIGN UP</a></div>
                </div>
                <div className="form-group" id='acitvelabel'>
                    <label htmlFor="exampleInputEmail1"></label>
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1"></label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
            </form>
            <div className='text-center'>
                <button className='btn btn-lg' >LOG IN</button>
            </div>
            <div className='text-center'>
                <p>Forgot password?</p>
            </div>
        </div>
    )
}