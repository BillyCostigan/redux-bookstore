import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main';

class AppComponent extends React.Component {
    render() {
        return (
            <div>
                <h1 className="alert-danger">OK</h1>
                <Main/>
            </div>
        )
    }
}

ReactDOM.render(<AppComponent/>, document.getElementById('app'));