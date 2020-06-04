import React from 'react';
import data from '../static/MOCK_DATA.json';
import '../styles/components/Header.scss';
import search from '../static/icons8-search-50.png';
import bell from '../static/icons8-bell-24-white.png';
import Notification from '../components/Notification.jsx';
import PerfilDiv from '../components/PerfilDiv.jsx';
const NotificationList = [];
const Header = () => {
  //let ScrollInY =window.pageYOffset;
  //window.onscroll= () => {
  //  let Desplazamiento = window.pageYOffset;
  //  if(ScrollInY >= Desplazamiento){
  //    document.getElementById('Header').style.top = '0';
  //  }
  //  else{
  //    document.getElementById('Header').style.top = '-100px';
  //  }
  //  ScrollInY = Desplazamiento;
  //}
  const ClickButtonBell = () => {
    if (document.getElementById("ContainerNotification").style.display === 'block') {
      document.getElementById("ContainerNotification").style.display = "none";
    }
    else{
      document.getElementById("ContainerNotification").style.display = "block";
    }
  }
  const ClickButtonPerfil = () => {
    if (document.getElementById("PerfilContainer").style.display === 'block') {
      document.getElementById("PerfilContainer").style.display = "none";
    }
    else{
      document.getElementById("PerfilContainer").style.display = "block";
    }
  }
  for (let i = 0; i < 7; i++) {
      NotificationList.push(<Notification 
      name={data[i].first_name} 
      fecha={data[i].Time} 
      descripcion={data[i].Description}
      FotoPerfil={data[i].avatar}
      key={i}
    />)
  }
  return (
    <header className='HeaderContainer' id="Header">
      <div className="HeaderBuscador">
        <input 
          className="HeaderBuscadorInput" 
          type="text"
          placeholder="Buscar"
        />
        <div className="HeaderButtonSearch">
          <img src={search} alt="icono buscador"/>
        </div>
      </div>
      <button onClick={ClickButtonBell}>
        <img 
          className="HeadeBellNotification" 
          src={bell} 
          alt="Notification"
        />
      </button>
      <div id="ContainerNotification" className="ContainerNotification">
        <h2>
          Notificaiones
        </h2>
        <div>
          {NotificationList}
        </div>
      </div>
      <button onClick={ClickButtonPerfil}>
        <img
          className="HeaderImgPerfil" 
          src="https://holatelcel.com/wp-content/uploads/2018/11/HEAD-face-recognition.jpg" 
          alt="ImagenPerfil"
        />
      </button>
      <div id="PerfilContainer" className="PerfilContainer">
        <PerfilDiv/>
      </div>
    </header>
  );
};

export default Header;
