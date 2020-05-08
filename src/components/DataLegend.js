import React from 'react';
import '../styles/DataLegend.css';

function DataLegend() {
    return (
        <section className="Data-Legend-Container">   
            <h2 className="Data-Legend-Header">Key</h2>
            <div className="Data-Legend-Key-Container">
                <div className="Data-Legend-Marker Negative"></div>
                <span className="Data-Legend-Label">Tested negative</span>
            </div>  
            <div className="Data-Legend-Key-Container">
                <div className="Data-Legend-Marker Without"></div>
                <span className="Data-Legend-Label">Healthy, without symptoms and without test</span>
            </div> 
            <div className="Data-Legend-Key-Container">
                <div className="Data-Legend-Marker With"></div>
                <span className="Data-Legend-Label">Experiencing symptoms but not yet tested</span>
            </div>
            
            <div className="Data-Legend-Key-Container">
                <div className="Data-Legend-Marker Positive"></div>
                <span className="Data-Legend-Label">Tested Positive</span>
            </div>
            <div className="Data-Legend-Key-Container">
                <div className="Data-Legend-Marker Vulnerable"></div>
                <span className="Data-Legend-Label">Vulnerable</span>
            </div>
        </section>
    )
}

export default DataLegend;