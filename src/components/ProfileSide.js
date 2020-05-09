import React from 'react';
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import YourImpact from './YourImpact';
import '../styles/Profile.css';
import '../styles/Pages.css';

// Sign-out button on top
async function signOut() {
    try {
        await Auth.signOut({ global: true });
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

// 

class ProfileSide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            brgySubdivision: '',
            cityTown: '',
            province: '',
            isOnboarded: false
        }
    }

    render() {
        const isOnboarded = this.state.isOnboarded;
        if (!isOnboarded) {
           return (
                <div>
                    This is an onboard form
                </div>
           ) 
        } else {
            return (
                <div className="Profile-Side-Container">
                    <div className="Header">
                        <div>
                            <Link to="/"><span className="logo">magkaka</span></Link>
                        </div>
                        <div>
                        <div className="Profile-Top-Navigation"> 
                            <Link to="/"><span className="fas fa-user-edit White-Icon"></span></Link>
                            <Link to="/"><span className="fas fa-door-closed White-Icon" onClick={signOut}></span></Link>
                        </div>
                        </div>
                    </div>
                    <div className="Profile-Body">
                        Log your movement as honestly as you can, to keep
                        track of your impact and other's impact on you regarding the spread of COVID-19.
                    </div>
                    <div>
                        <button className="Button">Log My Movement</button>
                    </div>
                    <div>
                        <YourImpact />
                    </div>
                    <div>
                        Feel free to contact us if you want to contribute to this app.
                        Or if you just need to talk to someone. <br></br>
                        <a href="mailto:magkaka@lowercaseinnovation.com" className="Page-Link">magkaka@lowercaseinnovation.com</a>
                    </div>
                </div> 
            )
        }
    }
}

export default ProfileSide;