import React from 'react';
import {Link, IndexLink} from 'react-router';

const Nav = () => {
    return (
        <div>
            <h1>Manage elements Page</h1>
            <div className="nav-container">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Select elements
                        <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <IndexLink to="/elements/" activeClassName="active">Authors</IndexLink>
                        </li>
                        <li>
                            <Link to="/elements/categories" activeClassName="active">Categories</Link>
                        </li>
                        <li>
                            <Link to="/elements/countries" activeClassName="active">Countries</Link>
                        </li>
                        <li>
                            <IndexLink to="/elements/books" activeClassName="active">Books</IndexLink>
                        </li>
                        <li>
                            <Link to="/elements/carriers" activeClassName="active">Carriers</Link>
                        </li>
                        <li>
                            <Link to="/elements/covers" activeClassName="active">Covers</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};
export default Nav;