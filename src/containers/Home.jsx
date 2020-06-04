import React from 'react';
import data from '../static/MOCK_DATA.json';
import Article from '../components/Article';
import '../styles/containers/Home.scss';
import NewPost from '../components/NewPost.jsx';
import Gesture from '../components/Gesture.jsx';
import Story from '../components/Story.jsx';
const articulos = [];
const Home = () => {
  for (let i = 0; i < 30; i++) {
    articulos.push(
      <Article 
        name={data[i].first_name} 
        fecha={data[i].Time} 
        descripcion={data[i].Description}
        FotoPerfil={data[i].avatar}
        key={i}
      />
    )
  }
  return (
    <>
      <div className='Home'>
        <div className="ContainerGenture">
          <Gesture/>
        </div>
        <div className="ContainerContent">
          <NewPost/>
          <div className="ContainerStory">
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
          </div>
          {articulos}
        </div>
      </div>
    </>
  );
};
export default Home;