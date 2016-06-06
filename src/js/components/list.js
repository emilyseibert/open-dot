import React, { PropTypes } from 'react';
import { map } from 'ramda';
import ListItem from './list-item';

export default class List extends React.Component {
    static propTypes = {
        listItems: PropTypes.arrayOf(PropTypes.string).isRequired
    }

    renderListItem(item) {
        return <ListItem key={item} item={item} />
    }

    render() {
        return (
            <ul className="list">
                {map(this.renderListItem, this.props.listItems)}
            </ul>
        );
    }
}
