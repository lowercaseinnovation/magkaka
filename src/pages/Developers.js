import React from 'react';
import { Link } from 'react-router-dom';
import StaticPageNavigation from '../components/StaticPageNavigation';
import '../styles/Pages.css';

function Developers() {
    return(
        <div className="Page-Container">
            <div className="Page-Header">
                <Link to="/"><span className="Page-Logo">magkaka</span></Link>
            </div>
            <div>
                <StaticPageNavigation />
            </div>
            <div className="Page-Content">
                <h1 className="Page-Secondary-Header">For Developers</h1>
                <p>
                    We created an open Data Lake of the COVID cases in the Philippines, by converting the spreadsheet files of the DOH's daily data drop into a .json file that you can use in your applications. 
                    We upload the daily updated cases beginning May 1, 2020. 
                <p>
                <h2 className="Page-Secondary-Header">Quick Guide:</h2>
                </p>
                <strong>HTTP endpoints:</strong>
                <br></br>
                latest: <br></br>
                This dataset is the most recent updated sheet from DOH.<br></br>
                <span className="endpoint">https://lowercaseinnovationdatalake.s3.amazonaws.com/covid-cases/latest.json</span>
                <br></br>
                day-to-day:<br></br>
                These dataset is the dataset that was uploaded by DOH on that day. Just change the date to your desired date.<br></br>
                <span className="endpoint">https://lowercaseinnovationdatalake.s3.amazonaws.com/covid-cases/MM-DD-2020.json</span>
                <br></br>
                Sample day-to-day endpoint url.<br></br>
                <span className="endpoint">https://lowercaseinnovationdatalake.s3.amazonaws.com/covid-cases/05-01-2020.json</span>
                This dataset is the dataset uploaded on May 1, 2020.
                </p>
                <strong>Data Model</strong><br></br>
                Display a Data Model Here.
                If you need some assistance with this api feel free to send us an email. 
                
                <p>
                    Would you like to help us out? 
                    Send us a short message on what you think we can improve on, why its important we pay attention to this problem, and your CV/Resume at magkaka@lowercaseinnovation.com
                </p>
            </div>
        </div>  
    )
}

export default Developers;