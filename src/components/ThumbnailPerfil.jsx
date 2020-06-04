import React from 'react';
import '../styles/components/ThumbnailPerfil.scss';

const ThumbnailPerfil = (props) => { 
  const { name, NickName, FotoPerfil } = props;
  return(
    <div className="ThumbnailPerfilContainer">
      <div className="ThumbnailPerfilImgName">
        <img src={FotoPerfil} alt="ThumbnailPerfil"/>
        <div className="ThumbnailPerfilName">
          <p><strong>@{NickName}</strong></p>
          <p>{name}</p>
        </div>
      </div>
      <button>
        Seguir
      </button>
    </div>
  );
}

export default ThumbnailPerfil;
