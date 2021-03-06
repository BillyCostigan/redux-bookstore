import React from 'react';
import Header from './common/HeaderPage';
import PropTypes from 'prop-types';
import Database from '../api/Database';

class App extends React.Component {
    render () {
        return (
            <div className="container-fluid">
                <Header/>
                {this.props.children}
            </div>
        )
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;