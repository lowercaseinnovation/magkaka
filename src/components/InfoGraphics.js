import React from 'react';
import '../styles/DataLegend.css';

function InfoGraphics() {
    return(
        <div className="Infographics-Container">
            <h3 className="Infographics-Group-Header">Total Tests Conducted: 131,786</h3>
            <span className="Infographics-Source">Source: DOH - Last Updated: May 9 7:30AM</span>
            <h2 className="Infographics-Group-Header">Positive Cases</h2>          
            <div className="Infographics-Info-Group-Container">
            <div className="Infographics-Info-Container">
                    <span className="Infographics-Important-Number Positive-Text">10,463</span>
                    <span className="Infographics-Label">Confirmed Positive</span>
                </div> 
                <div className="Infographics-Info-Container">
                    <span className="Infographics-Semi-Important-Number">2,558</span>
                    <span className="Infographics-Label">Age 60+</span>
                </div>
                <div className="Infographics-Info-Container">
                    <span className="Infographics-Semi-Important-Number">949</span>
                    <span className="Infographics-Label">Asymptomatic</span>
                </div>
            </div>
                
            <h3 className="Infographics-Group-Header">About Those Confirmed Positive</h3>
                <p className="Infographics-Question">Who Stays in the Hospital?</p>
                <div className="Graph-Container">
                    <div className="Admitted"><span className="Inside">3790</span></div>
                    <div className="Not-Admitted"><span className="Inside">1876</span></div>
                    <span className="Inside">4797</span>
                </div>
                <div className="Infographics-Label">
                    <div className="Graph-Key Vulnerable"></div>Admitted: 3790 <div className="Graph-Key Positive"></div>Not Admitted: 1876 <div className="Graph-Key Grey"></div>No Data: 4797 </div>
                <p className="Infographics-Question">Who Gets Quarantined?</p>
                <div className="Graph-Container">
                    <div className="Quarantined"><span className="Inside">2831</span></div>
                    <div className="Not-Quarantined"><span className="Inside">1923</span></div>
                    <span className="Inside">8077</span>
                </div>
            <div className="Infographics-Label">
                <div className="Graph-Key Vulnerable"></div>Quarantined: 2831 <div className="Graph-Key Positive"></div>Not Quarantined: 1923 <div className="Graph-Key Grey"></div>No Data: 8077 </div>
            

            {/* <p className="CTA-Phrase">
                Magkaka attempts to visualize contact tracing of COVID-19.
                <br></br>We invite you to check-in your health status and the places you're visiting. 
                This will help all of us paint a better picture on how the virus spreads, as well as create more informed
                strategies on how to respond. 
            </p> */}
        </div>
    )
}

export default InfoGraphics;