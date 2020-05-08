import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

function StaticPageNavigation() {
    return (
        <div className="Static-Page-Navigation">     
            <Link to="/" className="Page-Link">Home</Link>
            <Link to="/about" className="Page-Link">Our Story</Link>
            <Link to="/about-data" className="Page-Link">Our Data</Link>
            <Link to="/ways-to-help" className="Page-Link">Support Us</Link>
            <Link to="/profile" className="Page-Link">Your Profile</Link>
        </div>
    )
}

export default StaticPageNavigation;