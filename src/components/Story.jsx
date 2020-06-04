import React from 'react';
import Popup from "reactjs-popup";
import '../styles/components/Story.scss';
const Story = () => (
  <Popup className="PopUp"
    trigger={<div className='StoryContainer'></div>} 
    modal
    closeOnDocumentClick
  >
    <div className='StoryContainerOpen'>
    </div>
  </Popup>
);

export default Story;
