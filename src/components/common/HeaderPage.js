import React from 'react';
import Logo from './logo/Logo';
import Nav from './nav/Nav';
import User from './user/User';
import News from './news/News';
import LoginModal from './login/LoginModal';


const Header = () => {
    return (
        <div className="header-container">
            <Logo/>
            <Nav/>
            <div className="divided"></div>
            <User/>
            <News/>
            <LoginModal/>
        </div>
    )
};
export default Header;