import React from 'react';
import data from '../static/MOCK_DATA.json';
import Article from '../components/Article';
import '../styles/containers/Perfil.scss';
import NewPost from '../components/NewPost.jsx';
import Popup from "reactjs-popup";
import ThumbnailPerfil from "../components/ThumbnailPerfil.jsx";

const articulos = [];
const ThumbnailPerfilList = [];
const Perfil = () => {
  for (let i = 0; i < 30; i++) {
    articulos.push(<Article 
      name={data[i].first_name} 
      fecha={data[i].Time} 
      descripcion={data[i].Description}
      FotoPerfil={data[i].avatar}
      key={i}/>
    )
  }
  for (let i = 10; i < 20; i++) {
    ThumbnailPerfilList.push(<ThumbnailPerfil 
      name={data[i].first_name} 
      NickName={data[i].last_name}
      FotoPerfil={data[i].avatar}
      key={i}/>
    )
  }
  return (
    <>
      <div className='Perfil'>
        <div className="ContainerGenture">
          <div className="GestureContainer">
            <img className = "MediaPrimario"
              src="https://cdn.pixabay.com/photo/2015/10/12/15/16/cat-984367__340.jpg" 
              alt="Imagen perfil"
            /> 
            <div className="ContainerInformacionDePerfil">
              <h2>NickName</h2>
              <div className="ContainerInformacionDeActividad">
                <Popup
                  trigger={
                    <div className="PopUpClass">
                      <p><strong>2,352</strong> posts</p>
                    </div>
                  }
                  modal
                  closeOnDocumentClick
                  className= 'PopUp'
                >
                  <div>
                    Posts
                    <div>
                      {ThumbnailPerfilList}
                    </div>
                  </div>
                </Popup>
                <Popup
                  trigger={
                    <div className="PopUpClass">
                      <p><strong>2,352</strong> followers</p>
                    </div>
                  }
                  modal
                  closeOnDocumentClick
                  className= 'PopUp'
                >
                  <div className="PopUpClassOpen">
                    Followers
                    <div>
                      {ThumbnailPerfilList}
                    </div>
                  </div>
                </Popup>
                <Popup
                  trigger={
                    <div className="PopUpClass">
                      <p><strong>2,352</strong> following</p>
                    </div>
                  }
                  modal
                  closeOnDocumentClick
                  className= 'PopUp'
                >
                  <div className="PopUpClassOpen">
                    Following
                    <div>
                      {ThumbnailPerfilList}
                    </div>
                  </div>
                </Popup>
              </div>
            </div>
          </div>
        </div>
        <div className="ContainerContent">
          <NewPost/>
          {articulos}
        </div>
      </div>
    </>
  );
};
export default Perfil;