import React, { Component } from 'react';
import RegisterReverse from '../Register/RegisterReverse';
class JoinUs extends Component {
   constructor(props){
       super(props);
       this.state = {
           showRegister:false
       }
        this.show = this.show.bind(this);
   }
    show(){
        this.setState({showRegister:!this.state.showRegister})
    }
    render() {
        return (
            <section id='joinussection'>
                <div className="container text-center">
                    <h1>JOIN US NOW</h1>
                    <button 
                    onClick={this.show}
                    id='createaccount' 
                    className='btn btn-lg'>CREATE AN ACCOUNT</button>
                </div>
                {this.state.showRegister ? <RegisterReverse /> : null}
            </section>
        );
    }
}

export default JoinUs;