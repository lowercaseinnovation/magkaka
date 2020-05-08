import React, { Component } from 'react';
import MapGL, { Marker, Popup, GeolocateControl, NavigationControl } from 'react-map-gl';
import '../styles/MapBox.css';
import '../styles/DataLegend.css';

const MAPBOX_TOKEN = 'pk.eyJ1IjoibG93ZXJjYXNlaW5ub3ZhdGlvbiIsImEiOiJjazl0aHMzaGIwNHZjM2ZwbnRyODJtMWIwIn0.i4XW8ShLGXgGTKpn8uDH3Q'

class FullMapbox extends Component {
  state = {
    viewport: {
      width: "100%",
      height: "100vh",
      latitude: 14.5995,
      longitude: 120.9842,
      zoom: 13
    },
    searchResultLayer: null,
    userLocation: {},
    confirmedPositive: [],
    vulnerable: [],
    selectedMarker: null
  };

  mapRef = React.createRef();

  setUserLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
       let setUserLocation = {
           lat: position.coords.latitude,
           long: position.coords.longitude
        };
       let newViewport = {
          height: "100vh",
          width: "60%",
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          zoom: 13
        };
        this.setState({
          viewport: newViewport,
          userLocation: setUserLocation
       });
    });
  };

  
  handleViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    });
  };

  componentDidMount() {
    this.fetchStationAPI();
  }

  fetchStationAPI = () => {
    fetch(`https://lowercaseinnovationdatalake.s3.amazonaws.com/nCOVCasesPinas.json`)
    .then(res => res.json())
    .then(positives => {
      let senior = this.filterVulnerable(positives);
      let allOtherPositives = this.filterPositives(positives);
      this.setState({
          confirmedPositive: allOtherPositives,
          vulnerable: senior
       });
     });
  };

  setSelectedMarker = object => {
    this.setState({
      selectedMarker: object
    })
  }

  closePopup = () => {
    this.setState({
      selectedMarker: null
    })
  }

  filterPositives = positives => {
    return positives.filter(spot => {
      return spot.Age < 60;
    })
  }

  filterVulnerable = positives => {
    return positives.filter(spot => {
      return spot.Age >= 60;
    })
  }

  loadConfirmedPositives = () => {
    return this.state.confirmedPositive.map(spot => {
      return (
        <Marker
           key={spot.CaseCode}
           latitude={parseFloat(spot.Latitude)}
           longitude={parseFloat(spot.Longitude)}
        >
           <div 
            className="Actual-Data-Legend-Marker Positive"
            onClick={() => this.setSelectedMarker(spot)} />
        </Marker>
      );
    });
  };

  loadVulnerable = () => {
    return this.state.vulnerable.map(spot => {
      return (
        <Marker
           key={spot.CaseCode}
           latitude={parseFloat(spot.Latitude)}
           longitude={parseFloat(spot.Longitude)}
        >
           <div 
            className="Actual-Data-Legend-Marker Vulnerable"
            onClick={() => this.setSelectedMarker(spot)} />
        </Marker>
      );
    });
  };


  render() {
    const { viewport } = this.state;

    return (
      <div>
        <div className="fullMap">
        <MapGL
          ref={this.mapRef}
          {...viewport}
          onViewportChange={this.handleViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        >
          <NavigationControl showCompass={false} />
          <GeolocateControl />
          {
          this.loadConfirmedPositives()
        }
        {
          this.loadVulnerable()
        }
        {
          this.state.selectedMarker !== null ? (
            <Popup
            latitude={parseFloat(this.state.selectedMarker.Latitude)}
            longitude={parseFloat(this.state.selectedMarker.Longitude)}
            onClose={this.closePopup} >
            <div>
              <p>Date Tested: {this.state.selectedMarker.DateRepConf}</p>
              <p>Health Status: {this.state.selectedMarker.HealthStatus}</p>
              <p>Location Accuracy Level: {this.state.selectedMarker.LocationAccuracy}</p>
              <p>Data Source: {this.state.selectedMarker.Source}</p>
            </div>
            </Popup>
          ) : null }
        </MapGL>
        </div>
      </div>
    );
  }
}

export default FullMapbox;