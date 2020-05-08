import React from 'react';
import { Link } from 'react-router-dom';

function StaticLinks() {
    return (
        <div className="Static-Links">
            <Link to="/about-data" className="Link-Static-Links">About Our Data</Link>
            <Link to="/ways-to-help" className="Link-Static-Links">Help Us Do Better</Link>
        </div>
    )
}

export default StaticLinks