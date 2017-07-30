import React from 'react';
import {Link, IndexLink} from 'react-router';
import Nav from './nav/Nav';

class ElementsPage extends React.Component {
    render() {
        return (
            <div className="jumbotron elements-container">
                <Nav/>
                {this.props.children}
            </div>
        )
    }
}

export default ElementsPage;