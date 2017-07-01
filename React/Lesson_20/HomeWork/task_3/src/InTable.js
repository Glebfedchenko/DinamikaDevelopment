import React, { Component } from 'react';

class InTable extends Component {
    state = {  }
    render() {
        return (
            <div>
                           <div>
                {this.props.items.map((item)=>{
                    {item.name}
                })}
            </div>
            </div>
        );
    }
}

export default InTable;