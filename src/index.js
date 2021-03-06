import 'babel-polyfill';
import 'jquery';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import './styles/style.scss';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import routes from './routes';
import configureStore from './store/configureStore';

const store = configureStore();

render (
    <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);