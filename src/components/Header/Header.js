import React from "react";

import "./Header.scss";
import heroImg from '../../img/hero.jpeg';

function Header() {
    let backgroundHeader = {
        'background-image': 'linear-gradient(rgba(16, 29, 44, 0.93), rgba(16, 29, 44, 0.93)), url(' + heroImg + ')'
    }
    return (
        <header className="Header" style={backgroundHeader}>
            <img src={require('../../img/logo.png')} alt="Nexter logo" className="Header__logo"/>
            <h3 className="heading-3">Your own home:</h3>
            <h1 className="heading-1">The ultimate personal freedom</h1>
            <button className="btn Header__btn">View our properties</button>
            <div className="Header__seenon-text">Seen on</div>
            <div className="Header__seenon-logos">
                <img src={require('../../img/logo-bbc.png')} alt="Seen on logo 1"/>
                <img src={require('../../img/logo-forbes.png')} alt="Seen on logo 2" />
                <img src={require('../../img/logo-techcrunch.png')} alt="Seen on logo 3" />
                <img src={require('../../img/logo-bi.png')} alt="Seen on logo 4" />
            </div>
        </header>
    );
}

export default Header;
