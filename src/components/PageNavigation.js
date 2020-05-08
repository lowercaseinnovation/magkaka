import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

function PageNavigation() {
    return (
        <div className="Page-Navigation">     
            <Link to="/about"><span class="fas fa-book"></span> HOME</Link>
            <Link to="/visits"><span class="fas fa-map-marker"></span></Link> 
            <Link to="/profile"><span class="far fa-user-circle"></span></Link>
        </div>
    )
}

export default PageNavigation;