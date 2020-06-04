import React from 'react';
import data from '../static/MOCK_DATA.json';
import Article from '../components/Article';
import '../styles/containers/Store.scss';
import Product from '../components/Product.jsx';
import Gesture from '../components/Gesture.jsx';

const articulos = [];
const Store = () => {
  for (let i = 0; i < 30; i++) {
    articulos.push(<Article 
      name={data[i].first_name} 
      fecha={data[i].Time} 
      descripcion={data[i].Description}
      FotoPerfil={data[i].avatar}
      key={i}
    />)
  }
  return (
    <>
      <div className='Store'>
        <div className="ContainerGenture">
          <Gesture/>
        </div>
        <div className="ContainerContent">
          <Product 
            imagen="https://pocketnow.com/files/2014/09/incognito-mode.jpg" 
            titulo="incognito"
            descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " 
            Calificacion="8.5" 
            Precio="3$ Dolares"
          />
          <Product 
            imagen="https://api.time.com/wp-content/uploads/2014/06/154857292.jpg?w=600&quality=85" 
            titulo="Super Story"
            descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " 
            Calificacion="7.9" 
            Precio="2.5$ Dolares"
          />  
          <Product 
            imagen="https://i.kym-cdn.com/entries/icons/original/000/000/935/puking-rainbows.jpg" 
            titulo="Arcoiris"
            descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " 
            Calificacion="6.7" 
            Precio="2$ Dolares"
          />
          <Product 
            imagen="https://www.latercera.com/resizer/okD6f0uE8vY7YRvs33e8A4Jabm8=/900x600/filters:focal(329x252:339x242)/cloudfront-us-east-1.images.arcpublishing.com/copesa/OFW373PEI5GPVOQTRMZGCJ3KF4.jpg" 
            titulo="Super Chat"
            descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " 
            Calificacion="8.5" 
            Precio="3$ Dolares"
          />
          <Product 
            imagen="https://previews.123rf.com/images/asantosg/asantosg1609/asantosg160900131/63210824-funny-cartoon-world-map-with-children-of-different-nationalities-animals-and-monuments-of-all-the-co.jpg" 
            titulo="Ranking Maps"
            descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " 
            Calificacion="9.2" 
            Precio="3.5$ Dolares"
          />
          <Product 
            imagen="https://i.pinimg.com/originals/bd/fe/da/bdfedabf52a7e72ae95a5b62e3353e3b.jpg" 
            titulo="Random"
            descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " 
            Calificacion="8.8" 
            Precio="1.5$ Dolares"
          />
        </div>
      </div>
    </>
  );
};
export default Store;