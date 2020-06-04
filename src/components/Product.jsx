import React from 'react';
import '../styles/components/Product.scss';

const Product = (props) =>{
  const { imagen, titulo, descripcion, Calificacion, Precio } = props;
  return(
    <div className='ProductContainer'>
      <img 
        src={imagen}
        alt="img incognito"
        />
      <div className="ProductContainerData">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <h4>{Calificacion}</h4>
        <h4>{Precio}</h4>
      </div>
      <button>
        Comprar
      </button>
    </div>
  );
} 

export default Product;
