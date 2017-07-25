import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
    super(props);
    this.state = {
      defaults: ["I am:", "Seeking:", "Age:", "To:", "Country:"],
      i: ["Male", "Female"],
      seek: ["Male", "Female"],
      age: [19, 22, 25, 28, 35],
      to: ["Marry", "Date", "Chat"],
      country: ["Ukraine", "Czhech", "Paraguay", "USA"],
      users:[
        {name:'Vasya', age:19, gender: 'Male'},
        {name:'Petya', age:19, gender: 'Male'},
        {name:'Sveta',age:19, gender: 'Female'},
        {name:'Igor', age:22, gender:'Male'},
        {name:'Masha', age:35, gender:'Female'},
        {name:'Ira', age:35, gender:'Female'},
        {name:'Marina', age:28, gender:'Female'}
      ]
    };
  }
  iChange (e){
    //console.log(e.target.value);
    const value = {iam: document.getElementsByClassName("a")[0].value,
                seeking: document.getElementsByClassName("b")[0].value,
                age:document.getElementsByClassName("c")[0].value,
                to:document.getElementsByClassName("d")[0].value,
                country:document.getElementsByClassName("e")[0].value};
    
    console.log(value);
  }
  
  go(){
       this.state.users
      .filter(user => {
      return ((user.age == document.getElementsByClassName("c")[0].value)
             &&(user.gender == document.getElementsByClassName("a")[0].value)) 
    })
    .map(user =>{
      return console.log(user);
    })
  }

    render() {
        const options = (x, index) => {
            return <option key={index}>{x}</option>
        }
        return (
            <div id='search'>
                <div className='selections text-center'>
        <select className='a' onChange={this.iChange.bind(this)} defaultValue={this.state.defaults[0]}>
          <option value={this.state.defaults[0]} disabled>{this.state.defaults[0]}</option>
          {this.state.i.map(options)}
        </select>
               <select className='b' onChange={this.iChange.bind(this)} defaultValue={this.state.defaults[1]}>
          <option value={this.state.defaults[1]} disabled>{this.state.defaults[1]}</option>
          {this.state.seek.map(options)}
        </select>
                <select className='c' onChange={this.iChange.bind(this)} defaultValue={this.state.defaults[2]}>
          <option value={this.state.defaults[2]} disabled>{this.state.defaults[2]}</option>
          {this.state.age.map(options)}
        </select>
                <select className='d' onChange={this.iChange.bind(this)} defaultValue={this.state.defaults[3]}>
          <option value={this.state.defaults[3]} disabled>{this.state.defaults[3]}</option>
          {this.state.to.map(options)}
        </select>
                <select className='e' onChange={this.iChange.bind(this)} defaultValue={this.state.defaults[4]}>
          <option value={this.state.defaults[4]} disabled>{this.state.defaults[4]}</option>
          {this.state.country.map(options)}
        </select>
                    <button onClick={this.go.bind(this)} className='btn btn-lg'>SEARCH</button>
                </div>
            </div>
        );
    }
}

export default Search;