import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';
import '../styles/components/Maps.scss';
function Map() {
  return(
    <GoogleMap 
      defaultZoom ={2} 
      defaultCenter={{lat: 4.710989, lng: -74.072090}}
    />
  )
}
const WrappedMap = withScriptjs(withGoogleMap(Map));

const Maps = () =>{
  return (
    <div className="ContainerMap">
      <WrappedMap 
        googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}  
      />
    </div>
  );
}
export default Maps