import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main';

class AppComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>OK</h1>
                <Main/>
            </div>
        )
    }
}

ReactDOM.render(<AppComponent/>, document.getElementById('app'));