import * as React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './containers/app.js';
import Home from './containers/home.js';

export default <Route path="/" component={App}>
    <Route path="home" component={Home} />
    <IndexRedirect to="home" />
</Route>;
