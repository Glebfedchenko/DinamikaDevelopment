import React, { Component } from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val1: "",
      val2: "",
      result: ""
    };
    this.handleVal1 = this.handleVal1.bind(this);
    this.handleVal2 = this.handleVal2.bind(this);
  }

  handleVal1(event) {
    const re = /^[0-9\b]+$/;
    if (event.target.value == "" || re.test(event.target.value)) {
      this.setState({ val1: event.target.value });
    } else {
      alert("Only numbers please");
    }
  }
  handleVal2(event) {
    const re = /^[0-9\b]+$/;
    if (event.target.value == "" || re.test(event.target.value)) {
      this.setState({ val2: event.target.value });
    } else {
      alert("Only numbers please");
    }
  }
  plusFunc() {
    this.setState({
      result: +this.state.val1 + +this.state.val2
    }, () => {
      this.setState({
        val1: '',
        val2: ''
      })
    })
  }
  minusFunc() {
    this.setState({
      result: +this.state.val1 - +this.state.val2
    }, () => {
      this.setState({
        val1: '',
        val2: ''
      })
    })
  }
  multiplyFunc() {
    this.setState({
      result: +this.state.val1 * +this.state.val2
    }, () => {
      this.setState({
        val1: '',
        val2: ''
      })
    })
  }
  divideFunc() {
    if (this.state.val2 == 0) {
      alert("Division by zero is impossible");
      this.setState({
        val1: '',
        val2: ''
      });
    } else {
      this.setState({
        result: +this.state.val1 / +this.state.val2
      }, () => {
        this.setState({
          val1: '',
          val2: ''
        })
      })
    }
  }

  render() {
    return (
      <div>
        <div>
          <h3>Type first value</h3>
          <input
            type="text"
            placeholder="Value1"
            value={this.state.val1}
            onChange={this.handleVal1}
          />
        </div>
        <div>
          <h3>Type second value</h3>
          <input
            type="text"
            placeholder="Value2"
            value={this.state.val2}
            onChange={this.handleVal2}
          />
        </div>
        <div>
          <button
            className="btn btn-primary"
            onClick={this.plusFunc.bind(this)}
          >
            +
          </button>
          <button
            className="btn btn-success"
            onClick={this.minusFunc.bind(this)}
          >
            -
          </button>
          <button
            className="btn btn-danger"
            onClick={this.multiplyFunc.bind(this)}
          >
            *
          </button>
          <button
            className="btn btn-warning"
            onClick={this.divideFunc.bind(this)}
          >
            /
          </button>
        </div>
        <h1>Result: {this.state.result}</h1>
      </div>
    );
  }
}

export default App;