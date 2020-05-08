import React from 'react';
import { withAuthenticator } from "aws-amplify-react";
import MagkakaCognitoTheme from '../styles/MagkakaCognitoTheme';
import FullMapbox from '../components/FullMapbox';
import Footer from '../components/Footer';
import ProfileSide from '../components/ProfileSide';
import DataLegend from '../components/DataLegend';

const federated = {
  facebook_app_id: '218861049457466', // Enter your facebook_app_id here
};

class Profile extends React.Component {
  render() {
    return (  
      <div className="App">     
          <div className="Secondary">
            <ProfileSide />
            <DataLegend />
            <Footer />
          </div>
          <div className="Main">
            <FullMapbox />
          </div>
      </div>
    )
  }
}

export default withAuthenticator(Profile, false, [], federated, MagkakaCognitoTheme);