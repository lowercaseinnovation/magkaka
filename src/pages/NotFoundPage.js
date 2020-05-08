import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Pages.css';

function NotFoundPage() {
    return (
        <div className="Page-Container">
            <div className="Page-Header">
                <Link to="/"><span className="Page-Logo">magkaka</span></Link>
            </div>
            <div className="Page-Content">
                <h2 className="NotFoundPage-Header">Uh-Oh!</h2>
                <p>We can't find the page you're looking for. Here's your way back <Link to="/" className="Page-Link">home</Link></p>
                <p>If you ran into a problem please send us an email at: <a href="mailto:magkaka@lowercaseinnovation.com" className="Page-Link">magkaka@lowercaseinnovation.com</a></p>
            </div>

        </div>
    )
}

export default NotFoundPage;