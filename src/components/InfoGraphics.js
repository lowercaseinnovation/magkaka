import React from 'react';
import '../styles/DataLegend.css';

function InfoGraphics() {
    return(
        <div className="Infographics-Container">
            <h2 className="Infographics-Section-Header">Quick Snapshot</h2>
            
            <h3 className="Infographics-Group-Header">Tests</h3>
            <div className="Infographics-Info-Group-Container">
            <div className="Infographics-Info-Container">
                    <span className="Infographics-Important-Number">100</span>
                    <span className="Infographics-Label">Total Tests Conducted</span>
                </div>
                <div className="Infographics-Info-Container">
                    <span className="Infographics-Important-Number">2</span>
                    <span className="Infographics-Label">Tested Positive</span>
                </div>
                <div className="Infographics-Info-Container">
                    <span className="Infographics-Important-Number">8</span>
                    <span className="Infographics-Label">Tested Negative</span>
                </div>
            </div>
                
            


            <span className="Infographics-Label">Vulnerable Age Group </span>
            <span className="Infographics-Label">Asymptomatic? </span>

            
            <span className="Infographics-Label">Last 3 Weeks </span>
            <h3 className="Infographics-Group-Header">Tested Positive</h3>
            <span className="Infographics-Label"> Admitted </span>
            <span className="Infographics-Label"> Quarantined </span>            
            <span className="Infographics-Label"> No Data </span>
            <span className="Infographics-Label"> Missing Location Data </span>

            <p className="CTA-Phrase">
                Magkaka attempts to visualize contact tracing of COVID-19.
                <br></br>We invite you to check-in your health status and the places you're visiting. 
                This will help all of us paint a better picture on how the virus spreads, as well as create more informed
                strategies on how to respond. 
            </p>
        </div>
    )
}

export default InfoGraphics;