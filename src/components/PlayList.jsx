import React from 'react';
import '../styles/components/PlayList.scss';
import ThumbnailVideo from './ThumbnailVideo.jsx'
import repeat from '../static/icons8-repeat-100-white.png'
import shuffle from '../static/icons8-shuffle-100-white.png'
const PlayList = () => {
  return(
    <div className="PlayListContainer">
      <div className="options">
        <h4 className="name-play-list">Playlist For Test</h4>
        <div className="optionIcons">
          <div className="btn-option">
            <img src={shuffle} alt="Repeat"/>
          </div>
          <div className="btn-option">
           <img src={repeat} alt="Repeat"/>
          </div>
        </div>
      </div>  
      <ul>
        <ThumbnailVideo/>
        <ThumbnailVideo/>
        <ThumbnailVideo/>
        <ThumbnailVideo/>
        <ThumbnailVideo/>
        <ThumbnailVideo/>
        <ThumbnailVideo/>
        <ThumbnailVideo/>
        <ThumbnailVideo/>
        <ThumbnailVideo/>
        <ThumbnailVideo/>
        <ThumbnailVideo/>
        <ThumbnailVideo/>
        <ThumbnailVideo/>
        <ThumbnailVideo/>
        <ThumbnailVideo/>
        <ThumbnailVideo/>
        <ThumbnailVideo/>
        <ThumbnailVideo/>
      </ul>
    </div>
  )
}

export default PlayList;
