import * as React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './containers/app.js';
import Home from './containers/home.js';
import GroceryList from './containers/grocery-list.js';

export default <Route path="/" component={App}>
    <Route path="home" component={Home} />
    <Route path="grocery-list" component={GroceryList} />
    <IndexRedirect to="home" />
</Route>;
