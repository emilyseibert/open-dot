require('../scss/style.scss');
require('./config/a11y.js');

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store';
import { Provider } from 'react-redux';

const store = configureStore();

const Root = <Provider store={store}>
    <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
        {routes}
    </Router>
</Provider>;

ReactDOM.render(Root, document.getElementById('root'));
