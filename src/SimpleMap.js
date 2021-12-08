import React from 'react';
import configData from "./config.json";
import GoogleMapReact from 'google-map-react';

import { useHistory
 } from "react-router-dom";



function SimpleMap({data}) {

  const history = useHistory();
  const AnyReactComponent = ({ text, item }) => (
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
  }}
    onClick = {() => { 
      history.push('/sampleobject', { data: item })
    }
  }
  >
    {text}
  </div>
);


  let props = {
    center: {
      lat: 43.241941518381964,
      lng: -79.90057843215567
    },
    zoom: 12
  };

  function createMapMarker(item) {
    // console.log(item);
    return <AnyReactComponent
      lat={item.latitude}
      lng={item.longitude}
      text={item.name}
      item={item}
    />
  }

  function generateMapMarkers(data) {
    if (data) {
      return data.map((item, idx) => createMapMarker(item));
    } else {
      return <div></div>;
    }
  }

  return (
      <div style={{ height: '88vh', width: '100%' }}>
        {/* create map component with default props and API key*/}
        <GoogleMapReact
          bootstrapURLKeys={{ key: configData.MAPS_API_KEY }}
          defaultCenter={props.center}
          defaultZoom={props.zoom}
        >
          {generateMapMarkers(data)}
        </GoogleMapReact>
      </div>
    );
}

export default SimpleMap;
