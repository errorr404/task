import React from 'react';
import Logo from '../../assets/Logo.svg';
import './homeNavbar.scss';

const HomeNavbar = () => (
    <div className="homeNavbar">
        <img src={Logo} alt="logo" />
        <div className="homeNavbar__buttonSection">
        <button className="homeNavbar__buttonSection__button homeButton">Get Started</button>
        <span className="homeNavbar__buttonSection__text">It's free!</span>
        </div>
    </div>
)
export default HomeNavbar;