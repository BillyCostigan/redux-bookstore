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
// import configureStore from './store/configureStore';
//
// const store = configureStore();

render (
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('app')
);

// class AppComponent extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1 className="alert-danger">OK</h1>
//                 <Main/>
//                 <CoursesPage/>
//             </div>
//         )
//     }
// }
//
// ReactDOM.render(
//     <Provider store={store}>
//     <AppComponent />
//     </Provider>,
//     document.getElementById('app'));