import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

function Navigation() {
    return (
        <div className="Top-Navigation">     
            <Link to="/about"><span className="fas fa-book White-Icon"></span></Link>
            {/* <Link to="/visits"><span className="fas fa-map-marker White-Icon"></span></Link>  */}
            <Link to="/profile"><span className="far fa-user-circle White-Icon"></span></Link>
        </div>
    )
}

export default Navigation;