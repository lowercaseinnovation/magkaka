import React from 'react';
import { Link } from 'react-router-dom';
import StaticPageNavigation from '../components/StaticPageNavigation';
import '../styles/Pages.css';
import '../styles/DataLegend.css';

var dataModel =  {
    "CaseCode": "C100829",
    "Age": 54,
    "AgeGroup": "50 to 54",
    "Sex": "Male",
    "DateRepConf": "2020-05-05",
    "DateDied": "",
    "DateRecover": "",
    "RemovalType": "",
    "DateRepRem": "",
    "Admitted": "",
    "RegionRes": "NCR",
    "ProvRes": "NCR",
    "CityMunRes": "Pasay City",
    "RegionPSGC": "PH130000000",
    "ProvPSGC": "PH137600000",
    "CityMuniPSGC": "PH137605000",
    "HealthStatus": "Mild",
    "Quarantined": ""
  }

function Support() {
    return(
        <div className="Page-Container">
            <div className="Page-Header">
                <Link to="/"><span className="Page-Logo">magkaka</span></Link>
            </div>
            <div>
                <StaticPageNavigation />
            </div>
            <div className="Page-Content">
                <h1>Help us do better</h1>
                <h2>Honestly, the most important thing we need from you is your honesty</h2>
                <h2>Share</h2>
                <div>
                    <h3 className="Infographics-Group-Header">Missing Data From Those Confirmed Positive</h3>
                    <div className="Infographics-Info-Group-Container">
                        <div className="Infographics-Info-Container">
                            <span className="Infographics-Semi-Important-Number">3,601</span>
                            <span className="Infographics-Label">Cases older than 3 weeks without an update</span>
                        </div>
                        <div className="Infographics-Info-Container">
                            <span className="Infographics-Semi-Important-Number">4,797</span>
                            <span className="Infographics-Label">No Information if patient was admitted or not</span>
                        </div>
                        <div className="Infographics-Info-Container">
                            <span className="Infographics-Semi-Important-Number">258</span>
                            <span className="Infographics-Label">Missing Location Data</span>
                        </div>
                    </div>
                </div>
                
                <h2>If you can give, and you think what we're building has value</h2>
                <h2>If you have the time</h2>
                <div>
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
                <strong>Sample Data Model</strong><br></br>
                If you need some assistance with this api feel free to send us an email. 
                <div><pre className="endpoint">{JSON.stringify(dataModel, null, 2) }</pre></div>
                <p>
                    Would you like to help us out? 
                    Send us a short message on what you think we can improve on, why its important we pay attention to this problem, and your CV/Resume at magkaka@lowercaseinnovation.com
                </p>
                </div>
                <p> </p>
            </div>
        </div>  
    )
}

export default Support;