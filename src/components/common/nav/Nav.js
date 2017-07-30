import React from 'react';
import {Link, IndexLink} from 'react-router';

const Nav = () => {
    return (
        <div className="nav-container">
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Toggle
                    navigation
                    <span className="caret"></span>
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <IndexLink to="/" activeClassName="active">Home</IndexLink>
                    </li>
                    <li>
                        <Link to="/elements/" activeClassName="active">Manage elements</Link>
                    </li>
                    <li>
                        <Link to="/config" activeClassName="active">System configuration</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Nav;