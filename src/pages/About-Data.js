import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Pages.css';
import StaticPageNavigation from '../components/StaticPageNavigation';

function AboutData() {
    return(
        <div className="Page-Container">
            <div className="Page-Header">
                <Link to="/"><span className="Page-Logo">magkaka</span></Link>
            </div>
            <div>
                <StaticPageNavigation />
            </div>
            <div className="Page-Content">
              <h1>About Our Data</h1>
              <h2> Sources: </h2>
              <p>DOH Daily Data Drop: Used for confirmed cases and some other backend algorithm.</p>
              <p>Crowdsourced Data from our own API: for self-checkin about your symptoms and location</p>
              <p>Updated Daily</p>
              <h2>Data Processing</h2>
              <p>How do we clean our data?</p>
              <h3>The Cases we keep</h3>
              <p>
                  We only display cases that were confirmed positive up to 3 weeks from the time they were confirmed. 
                  This is based on medical advice that the virus can stay up to 3 weeks. 
                  If a patient recovers or dies, we also remove their data from our dataset. 
              </p>
              <h3>Location/ Mapping</h3>
              <p>
                  The dataset that we get from the DOH only reports up to the city level or location of the patient. 
                  The points in the map where they are located are done by random that fit within the bounds of the geoJSON data that
                  google maps have based on the boundaries of the geometry of the city/ municipality that was reported. 
              </p>
              <h3>Missing Information</h3>
              <p>
                  Some patients that were confirmed positive did not have a municipality or location recorded for them. 
                  We have an algorithm that compares the tests conducted by a testing center and the ones we have currently displayed,
                  which then assumes the testing center that conducted this test. In doing so, we place this patient in a location within the
                  city of the testing center that conducted the exam. 
              </p>
                <h3>Our Crowdsourced Data</h3>
                <p>
                    
                </p>
            </div>
        </div>  
    )
}

export default AboutData;