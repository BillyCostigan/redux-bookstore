import React from 'react';
import {Link, IndexLink} from 'react-router';

const Nav = () => {
    return (
        <div className="panel-group nav-container">
            <div className="panel panel-default row">
                <div className="panel-heading">
                    <h4 className="panel-titleitem">
                        <a data-toggle="collapse" href="#collapse">
                            Toggle navigation
                        </a>
                    </h4>
                </div>
                <div id="collapse" className="panel-collapse collapse">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <IndexLink to="/" activeClassName="active">Home</IndexLink>
                        </li>
                        <li className="list-group-item">
                            <Link to="/elements" activeClassName="active">Manage elements</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/about" activeClassName="active">System configuration</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Nav;