import React, { Component } from 'react';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [
                { class: 'Sedan', color: 'blue', producer: 'BMW' },
                { class: 'Sedan', color: 'blue', producer: 'BMW' },
                { class: 'Sedan', color: 'blue', producer: 'BMW' },
                { class: 'Sedan', color: 'blue', producer: 'BMW' }
            ]
        }
    }
    render() {
        return (
            <div>
                <h1>
                    Hello
             </h1>
             {this.state.cars.map((el,i)=>{
                 return(
                     <div>
                         {el[0].class}
                     </div>

                 )
             })}
            </div>
        );
    }
}

export default App;