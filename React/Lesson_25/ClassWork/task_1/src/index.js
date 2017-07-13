var React = require('react');
var ReactDOM = require('react-dom');

var Dispatcher = require('flux').Dispatcher;
var EventEmitter = require('events').EventEmitter;


var dispatcher = new Dispatcher();

function emitClick() {
    dispatcher.dispatch({
        type: 'CLICK'
    })
}

class AppStore extends EventEmitter {

    handleActions(action) {
        switch (action.type) {
            case 'CLICK': {
                console.log(this);
                this.emit('showText');
                break;
            }
        }
    }
}

const appStore = new AppStore;
dispatcher.register(appStore.handleActions.bind(appStore));

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            showText: false
        }
    }

    clickHandler() {
        emitClick();
    }

    componentDidMount() {

        var self = this;
        appStore.on('showText', function () {

            self.setState({ showText: !self.state.showText });
            console.log('showText action');
        })
    }
    render() {
        return (
                <div>
                      <button onClick={this.clickHandler} className='btn btn-success btn-lg'>Click!</button>
                      <h1 className={this.state.showText ? 'bg-primary' : ''}>Lorem ipsum</h1>
                </div>
        )
    }
}

var container = document.getElementById('root');
ReactDOM.render(<App/>, container);