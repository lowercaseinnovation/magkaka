import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import DeckGL, { GeoJsonLayer } from 'deck.gl';
import Geocoder from 'react-map-gl-geocoder';
import '../styles/MapBox.css';
import '../styles/DataLegend.css';

const MAPBOX_TOKEN = 'pk.eyJ1IjoibG93ZXJjYXNlaW5ub3ZhdGlvbiIsImEiOiJjazg3cjhrbWMwMHY2M2tzNHBiMXdmM3RzIn0.nak5sMqkKxz3fBebVmvcWQ'

class Mapbox extends Component {
  state = {
    viewport: {
      width: "70%",
      height: "100vh",
      longitude: 120.9842,
      latitude: 14.5995,
      zoom: 11
    },
    testingCenters: [],
    searchResultLayer: null,
    userLocation: {},
    selectedUser: null
  };

  mapRef = React.createRef();
  geocoderContainerRef = React.createRef();

  setUserLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
       let setUserLocation = {
          lng: position.coords.longitude,
          lat: position.coords.latitude
        };
       let newViewport = {
          height: "100vh",
          width: "70%",
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
          zoom: 13
        };
        this.setState({
          viewport: newViewport,
          userLocation: setUserLocation
       });
    });
  };

  componentDidMount() {
    this.fetchFakeData();
  }

  fetchFakeData = () => {
    fetch(`https://lowercaseinnovationdatalake.s3.amazonaws.com/wifiFakeData.json`)
    .then(res => res.json())
    .then(positives => {
      this.setState({
        testingCenters: positives
      });
    });
  };

  loadPositiveMarkers = () => {
    return this.state.testingCenters.map(spot => {
      return (
        <Marker
          key={spot.objectid}
          longitude={parseFloat(spot.longitude)}
          latitude={parseFloat(spot.latitude)}
        >
          <div className="Data-Legend-Marker Human Positive" />
        </Marker>
      )
    })
  }

  componentWillUnmount() {
    // window.removeEventListener("resize", this.resize);
  }

//   resize = () => {
//     this.handleViewportChange({
//       width: window.innerWidth,
//       height: window.innerHeight
//     });
//   };

  handleViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    });
  };

  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  handleGeocoderViewportChange = viewport => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };

    return this.handleViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides
    });
  };

  handleOnResult = event => {
    this.setState({
      searchResultLayer: new GeoJsonLayer({
        id: "search-result",
        data: event.result.geometry,
        getFillColor: [255, 0, 0, 128],
        getRadius: 1000,
        pointRadiusMinPixels: 10,
        pointRadiusMaxPixels: 10
      })
    });
  };

  render() {
    const { viewport, searchResultLayer } = this.state;

    return (
      <div>
        <div
          ref={this.geocoderContainerRef}
          style={{
            height: 50,
            position: "absolute",
            top: 18,
            display: "block",
            alignItems: "center",
            paddingLeft: 18
          }}
        />
        <div className="fullMap">
          
        <div onClick={this.setUserLocation} className="User-Location-Button">
        <span className="fas fa-map-pin Green-Icon"></span><div className="User-Location">Go to your location</div>
        </div>
        <MapGL
          ref={this.mapRef}
          {...viewport}
          onViewportChange={this.handleViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        >
          {Object.keys(this.state.userLocation).length !== 0 ? (
          <Marker
            longitude={this.state.userLocation.lng}
            latitude={this.state.userLocation.lat}
          >
            <div className="Data-Legend-Marker Human Without"></div>
          </Marker>
        ) : ( 
           <div></div>
        )}
        {this.loadPositiveMarkers()}
          <Geocoder
            mapRef={this.mapRef}
            containerRef={this.geocoderContainerRef}
            onResult={this.handleOnResult}
            onViewportChange={this.handleGeocoderViewportChange}
            mapboxApiAccessToken={MAPBOX_TOKEN}
          />
          <DeckGL {...viewport} layers={[searchResultLayer]} />
        </MapGL>
        </div>
      </div>
    );
  }
}

export default Mapbox
