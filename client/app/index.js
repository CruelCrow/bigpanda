import "babel-core/register";
import "babel-polyfill";

import React from 'react';
import {render} from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import Main from './components/Main';
import store from './store';

const history = createHistory({basename: '/app'});
const target = document.querySelector('#app');

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Main/>
        </ConnectedRouter>
    </Provider>,
    target
);