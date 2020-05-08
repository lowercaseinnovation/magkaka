import React from 'react';
import FullMapbox from '../components/FullMapbox';
import DataLegend from '../components/DataLegend';
import InfoGraphics from '../components/InfoGraphics';
import Footer from '../components/Footer';
import Header from '../components/FloatingHeader';
import '../App.css';


function FullMap() {
  return (
      <div className="App">     
          <div className="Secondary">
            <Header />
            <InfoGraphics />
            <DataLegend />
            <Footer />
          </div>
          <div className="Main">
            <FullMapbox />
          </div>
      </div>
  );
}

export default FullMap;