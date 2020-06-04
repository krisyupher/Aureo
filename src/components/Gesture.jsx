import React  from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../styles/components/Gesture.scss';
import 'react-tabs/style/react-tabs.css';
import Comment from '../components/Comment.jsx';
import PlayList from '../components/PlayList.jsx';
import Informacion from '../components/Information.jsx';
let ContenPrincipal = "";
const Gesture = () => {
  
  return (
    <div className="GestureContainer">
      <div className="GestureContainerConten">
        <div className = "MediaPrimario">
          {window.location.pathname==="/perfil" ? 
            <img 
              src="https://cdn.pixabay.com/photo/2015/10/12/15/16/cat-984367__340.jpg" 
              alt="Imagen perfil"
            /> : 
            <video controls>
              <source src="movie.mp4" type="video/mp4"/>
              <source src="movie.ogg" type="video/ogg"/>
              Your browser does not support the video tag.a
            </video>
          }
        </div>
        <Tabs>
          <TabList>
            <Tab>Información</Tab>
            <Tab>Comentarios</Tab>
            <Tab>Relacionados</Tab>
          </TabList>
          <TabPanel className="TabPanel">
            <Informacion/>
          </TabPanel>
          <TabPanel>
            <Comment/>
          </TabPanel>
          <TabPanel>
            <PlayList/>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Gesture;
