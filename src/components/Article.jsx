import React from "react";
import '../styles/components/Article.scss';
import comments from '../static/comments.png';
import heart from '../static/heart.png';
import share from '../static/share.png';
import { Link } from 'react-router-dom';

const Article = (props) => {
  const { name, fecha, descripcion, FotoPerfil } = props;

  return(
    <article className='ArticleContainer'>
      <div className="containerImg">
        <Link to={'/'+name}>
          <img
            className="HeaderImgPerfil" 
            src={FotoPerfil}
            alt="ImagenPerfil"
          />
        </Link>
      </div>
      <div className="ContainerContenido">
        <div>
          <div className="DetallePerfil">
            <Link to={'/'+name}>
              <h3>{name}</h3>
            </Link>
            <p>{fecha}</p>
          </div>
            <p>{descripcion}</p>
        </div>
        <div className="ArticuleMedia">
          <a href="#" className="ArticleIcons">
            <img src={comments} alt=""/>             
          </a>
          <a href="#" className="ArticleIcons">
            <img src={heart} alt=""/>               
          </a>
          <a href="#" className="ArticleIcons">
            <img src={share} alt=""/>             
          </a>
        </div>
      </div>
    </article>
  );
};

export default Article;
