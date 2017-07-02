import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show:false
        }
        this.showProps = this.showProps.bind(this);
    }

    showProps() {
       this.setState({show:!this.state.show});
    }
    render() {
        if(this.state.show){
            return(
                <div>
                    <li>{this.props.title}</li>
                    <li>{this.props.text}</li>
                </div>
            )
        }
        return (
            <div>
                <button onClick={this.showProps}>Shop props</button>
            </div>
        );
    }
}

export default App;