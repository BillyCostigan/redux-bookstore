import React from 'react';
import Logo from './logo/Logo';
import Nav from './nav/Nav';
import User from './user/User';
import News from './news/News';


const Header = () => {
    return (
        <div className="container header-container">
            <Logo/>
            <Nav/>
            <User/>
            <News/>
        </div>
    )
};
export default Header;