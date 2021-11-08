import React, { Component } from 'react';
import configData from "./config.json";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white', 
    background: 'green',
    padding: '10px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 43.241941518381964,
      lng: -79.90057843215567
    },
    zoom: 12
  };

  render() {
    return (
      <div style={{ height: '88vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: configData.MAPS_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            text="Chedoke Falls"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;