import React from 'react';
import '../styles/components/Information.scss';

const Information = () => (
  <div className='informationContainer'>
    <div className="ContainerIMG">
      <img 
        src="https://diariocorreo.pe/resizer/BZfASaxOFMcyN7OYihgAJbi2kV4=/980x528/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/XONDULWOZNHIBA62P24Y3E5BLE.jpg" 
        alt="fotoPerfil"/>
    </div>
    <div className="containerData">
      <div className="DataPerfil">
        <h4>nombre</h4>
        <h5>suscriptores</h5>
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Expedita deleniti dignissimos laudantium suscipit molestias possimus repudiandae impedit atque delectus, 
          blanditiis amet repellendus est obcaecati sunt in perferendis nesciunt. Ratione, minus.</p>
      </div>
    </div>
  </div>
);

export default Information;
