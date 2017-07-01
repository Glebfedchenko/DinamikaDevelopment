import React, { Component } from 'react';

class InList extends Component {
    state = {  }
    render() {
        return (
            <div>
                {this.props.items.map((item)=>{
                    {item.name}
                })}
            </div>
        );
    }
}

export default InList;