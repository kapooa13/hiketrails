import React from 'react';
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

function SimpleMap() {

  // default props for centering map

  let props = {
    center: {
      lat: 43.241941518381964,
      lng: -79.90057843215567
    },
    zoom: 12
  };

    return (
      <div style={{ height: '88vh', width: '100%' }}>
        {/* create map component with default props and API key*/}
        <GoogleMapReact
          bootstrapURLKeys={{ key: configData.MAPS_API_KEY }}
          defaultCenter={props.center}
          defaultZoom={props.zoom}
        >
          <AnyReactComponent
            lat={props.center.lat}
            lng={props.center.lng}
            text="Chedoke Falls"
          />
        </GoogleMapReact>
      </div>
    );
}

export default SimpleMap;