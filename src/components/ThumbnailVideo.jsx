import React from 'react';
import '../styles/components/ThumbnailVideo.scss';

const ThumbnailVideo = () => (
  <>
    <li className="ThumbnailVideoContainer">
      <video className="video-list"></video>
      <div className="descripcion">
        <h4 className="video-title">Video Title 01</h4>
        <p className="video-desc">Description Video1 Description Video Description Video Description Video Description </p>
        <div className="time">11:04</div>
      </div>
    </li>
  </>
);

export default ThumbnailVideo;
