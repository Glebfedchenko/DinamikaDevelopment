import React, { Component } from 'react';
import appStore from '../stores/appStore';
var appActions = require('../actions/appActions');
class App extends React.Component{
    constructor() {
        super();

        this.state = {
            num1: '',
            num2: '',
            result: 0,
            err: 'Error: Enter just Numbers in the fields!'
        };

        this.firstValueTake = this.firstValueTake.bind(this);
        this.secondValueTake = this.secondValueTake.bind(this);

        this.divideChecker = this.divideChecker.bind(this);
        this.plusChecker = this.plusChecker.bind(this);
        this.minusChecker = this.minusChecker.bind(this);
        this.multiChecker = this.multiChecker.bind(this);
    }

    componentWillMount() {
        appStore.on('plus', () => {
                appStore.plusFunc(Number(this.state.num1), Number(this.state.num2));
                this.setState({ result: isNaN(appStore.getResult()) ? this.state.err : appStore.getResult() })

            }
        );
        appStore.on('minus', () => {
                appStore.minusFunc(Number(this.state.num1), Number(this.state.num2));
                this.setState({ result: isNaN(appStore.getResult()) ? this.state.err : appStore.getResult() })
            }
        );
        appStore.on('multi', () => {
                appStore.multiFunc(Number(this.state.num1), Number(this.state.num2));
                this.setState({ result: isNaN(appStore.getResult()) ? this.state.err : appStore.getResult() })
            }
        );
        appStore.on('divide', () => {
                appStore.divideFunc(Number(this.state.num1), Number(this.state.num2) ? Number(this.state.num2) : "Error");
                this.setState({ result: isNaN(appStore.getResult()) ? this.state.err : appStore.getResult() })
            }
        );

    }

    firstValueTake(event){
        this.setState({
            num1: event.currentTarget.value
        });
    }

    secondValueTake(event){
        this.setState({
            num2: event.currentTarget.value
        });
    }

    divideChecker(event){
        if(this.state.num1 =='' || this.state.num2 == ''){
            event.preventDefault();
            this.setState({ result: "You have to ener both numbers" })
            return
        }
        if(!(Number(this.state.num2)) && !(isNaN(this.state.num2))){
            event.preventDefault();
            this.setState({ result: "Division by zero is impossible" })
            return
        }
        appActions.divideWorker()
    }

    multiChecker(event){
        if(this.state.num1 =='' || this.state.num2 == ''){
            event.preventDefault();
            this.setState({ result: "You have to ener both numbers" })
            return
        }
        appActions.multiWorker()
    }
    minusChecker(event){
        if(this.state.num1 =='' || this.state.num2 == ''){
            event.preventDefault();
            this.setState({ result: "You have to ener both numbers" })
            return
        }
        appActions.minusWorker()
    }
    plusChecker(event){
        if(this.state.num1 =='' || this.state.num2 == ''){
            event.preventDefault();
            this.setState({ result: "You have to ener both numbers" })
            return
        }
        appActions.plusWorker()
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.firstValueTake} placeholder='Input first number'/>
                <input type="text" onChange={this.secondValueTake} placeholder='Input second number'/>
                <h1>Result: {this.state.result}</h1>
                <input type="button" className='btn btn-primary' value='  +  ' onClick={this.plusChecker}/>
                <input type="button" className='btn btn-danger' value='  -  ' onClick={this.minusChecker}/>
                <input type="button" className='btn btn-success' value='  *  ' onClick={this.multiChecker}/>
                <input type="button" className='btn btn-alert' value='  /  ' onClick={this.divideChecker}/>
            </div>
        )}
}

export default App;