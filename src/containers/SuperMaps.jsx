import React from 'react';
import '../styles/containers/SuperMaps.scss';
import Gesture from '../components/Gesture.jsx';
import Maps from '../components/Maps.jsx';
const articulos = [];
const SuperMaps = () => {
  return (
    <>
      <div className='SuperMaps'>
        <div className="ContainerGenture">
          <Gesture/>
        </div>
        <div className="ContainerContent">
          <Maps/>
        </div>
      </div>
    </>
  );
};
export default SuperMaps;