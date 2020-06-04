import React from 'react';
import '../styles/components/PerfilDiv.scss';
import { Link } from 'react-router-dom';
const PerfilDiv = () => (
  <div className='PerfilDivContainer'>
    <div>
      <Link to="/Store">
        <div className="container-login-form-btn">
          Tienda
        </div>
      </Link>
    </div>
  </div>
);

export default PerfilDiv;
