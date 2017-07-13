import React from 'react';
import appStore from '../stores/appStore';
var appActions = require('../actions/appActions.js');

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            interval: "",
            stopDoubleClick: false,
            counter: 0
        };
        this.counteStart = this.counteStart.bind(this);
        this.counterTick = this.counterTick.bind(this);
        this.counterReset = this.counterReset.bind(this);
        this.counterStop = this.counterStop.bind(this);
    }

    componentWillMount() {
        appStore.on('counteStart', () => {
                appStore.counterFunc();
                this.setState({ counter: appStore.getCounter() })
            }
        )
        appStore.on('clearCount', () => {
                appStore.clearFunc();
                this.setState({ counter: appStore.getCounter() })
            }
        )
    }

    componentDidMount(){
        this.counteStart();
    }

    counteStart() {
        if(!this.state.stopDoubleClick) {
            this.setState({interval: setInterval(this.counterTick, 1000), stopDoubleClick: true})
        }
    }

    counterTick(){
        appActions.getStarted();
    }

    counterReset() {
        this.setState({
            stopDoubleClick: false
        });
        appActions.getClear();
    }

    counterStop() {
        clearInterval(this.state.interval);
        this.setState({
            stopDoubleClick: false
        });
    }

    render() {
        return (
            <div className="panel well">
                <h1 className="text-muted">{this.state.counter}</h1>
                <p><input className="btn btn-default btn-lg" type="button" value='start' onClick={this.counteStart}/></p>
                <p><input className="btn btn-default btn-lg" type="button" value='stop' onClick={this.counterStop}/></p>
                <p><input className="btn btn-default btn-lg" type="button" value='clear' onClick={this.counterReset}/></p>
            </div>
        )}
}

export default App;