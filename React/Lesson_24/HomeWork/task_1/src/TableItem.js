import React, { Component } from 'react';
class TableItem extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.name}
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