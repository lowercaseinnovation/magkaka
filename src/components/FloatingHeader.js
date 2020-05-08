import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

function Header() {
    return(
        <div className="Header">
            <div>
                <Link to="/"><span className="logo">magkaka</span></Link>
            </div>
            <div>
                <Navigation />
            </div>
        </div>
    )
}

export default Header;