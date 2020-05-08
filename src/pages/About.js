import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Pages.css';
import StaticPageNavigation from '../components/StaticPageNavigation';

function About() {
    return(
        <div className="Page-Container">
            <div className="Page-Header">
                <Link to="/"><span className="Page-Logo">magkaka</span></Link>
            </div>
            <div>
                <StaticPageNavigation />
            </div>
            <div className="Page-Content">
                <p>In Tagalog the prefix 'magkaka' is used to describe relationships between two people or entities.</p>
                <p>magkakapatid | siblings.      magkakakampi | teammates.      magkakaaway | enemies.</p>
                <p>
                    Our mission for this project is to simultaneously map the spread of COVID-19 and to remind us of how connected
                    our actions and movements are with each other. Without a comprehensive healthcare system and available vaccines it
                    is seemingly impossible to 
                </p>
                <p>
                    Ways to help.
                </p>
                <p> Honestly, we need your honesty when you create a profile and log your movement. </p>
                <p> Give us your 2 cents on how we can improve and optimize. You can do so by joining our Facebook group, or sending us an email at: magkaka@lowercaseinnovation.com</p>
                <p> Our next task is to get the information and data from people who don't have access to the internet. If you have </p>
                <p> If you have believe in our mission and you have some spare change, consider donating to our project by subscribing to our paid newsletter. </p>
                <Link to="/" className="Page-Link">Go Back Home</Link>
                <p> </p>
            </div>
        </div>  
    )
}

export default About;