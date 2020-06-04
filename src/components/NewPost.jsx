import React from 'react';
import '../styles/components/NewPost.scss';
import folder from '../static/icons8-pictures-folder-64.png';
import GIF from '../static/icons8-gif-80.png';
import Emoji from '../static/icons8-lol-64.png';
const NewPost = () => (
  <div className='NewPostContainer'>
    <div className="Title">
      <h2>Crear post</h2>
    </div>
    <div className="PostContent">
      <img
        className="HeaderImgPerfil" 
        src="https://holatelcel.com/wp-content/uploads/2018/11/HEAD-face-recognition.jpg" 
        alt="ImagenPerfil"
      />
      <input 
        type="text"
        placeholder="Que estas pensando?"  
      />
    </div>
    <div className="ContainerOptionPost">
      <div className="OptionPost">
        <img src={folder} alt=""/>      
        <img src={GIF} alt=""/>      
        <img src={Emoji} alt=""/>
      </div>
      <div>
        <button className="ButtonContainer">
          Publicar
        </button>
      </div>
    </div>
  </div>
);

export default NewPost;
