import React from 'react';
import '../styles/components/Notification.scss';

const Notification = (props) => {
  const { name, fecha, descripcion, FotoPerfil } = props;
  return(
    <div className='NotificationContainer'>
      <div className="containerImg">
        <img
          className="HeaderImgPerfil"
          src={FotoPerfil}
          alt="ImagenPerfil"
        />
      </div>
      <div className="ContainerContenido">
        <div className="DetallePerfil">
          <h3>{name}</h3>
          <p>{fecha}</p>
        </div>
          <p>{descripcion}</p>
      </div>
    </div>
  );
}

export default Notification;
