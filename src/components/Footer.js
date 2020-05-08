import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
    return(
        <div className="Footer-Container">
            <div className="Footer-Contact">
                <p>made with purpose by <a href="http://lowercaseinnovation.com" className="Footer-Link">lowercase innovation</a></p>
                <p>email: <a href="mailto:magkaka@lowercaseinnovation.com" className="Footer-Link">magkaka@lowercaseinnovation.com</a></p>
            </div>
            <div className="Static-Links">
                <Link to="/about-data" className="Footer-Link Block">About Our Data</Link>
                <Link to="/ways-to-help" className="Footer-Link Block">Help Us Do Better</Link>
            </div>
        </div>
    )
}

export default Footer;