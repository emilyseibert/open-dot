import React, { PropTypes } from 'react';

export default class ListItem extends React.Component {
    static propTypes = {
        item: PropTypes.string.isRequired
    }

    render() {
        return <li className="list-item">
            {this.props.item}
        </li>;
    }
}
