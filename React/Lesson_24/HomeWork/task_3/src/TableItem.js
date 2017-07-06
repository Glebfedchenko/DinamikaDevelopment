import React, { Component } from 'react';
class TableItem extends Component {
    render() {
        return (
            <tr>
                <td>
                    <a href="">{this.props.name}</a>
                </td>
                                <td>
                    {this.props.surname}
                </td>
                <td>
                    {this.props.gender}
                </td>
            </tr>
        );
    }
}

export default TableItem;