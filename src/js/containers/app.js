import React, { PropTypes } from 'react';
import i18n from '../i18n';

export default class App extends React.Component {
    static propTypes = {
        children: PropTypes.object
    }

    render() {
        return <div className="app-container">
            <h1>{i18n.getString('REACT_APPLICATION')}</h1>
            {this.props.children}
        </div>;
    }
}
