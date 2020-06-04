import React from 'react';
import { Link } from 'react-router-dom';
import imagen from '../static/img-01.png';
import '../styles/containers/Login.scss';

const Login = () => {
  return (
    <div class="limiter">
      <div class="container-login">
        <div class="login-img" data-tilt>
          <img src={imagen} alt="IMG"/>
        </div>

        <form class="login-form">
          <span class="login-form-title">
            Member Login
          </span>

          <div class="wrap-input validate-input" data-validate = "Valid email is required: ex@abc.xyz">
            <input class="input" type="text" name="email" placeholder="Email"/>
            <span class="focus-input"></span>
            <span class="symbol-input">
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </span>
          </div>

          <div class="wrap-input validate-input" data-validate = "Password is required">
            <input class="input" type="password" name="pass" placeholder="Password"/>
            <span class="focus-input"></span>
            <span class="symbol-input">
              <i class="fa fa-lock" aria-hidden="true"></i>
            </span>
          </div>
          
          <Link to="/">
            <div class="container-login-form-btn">
              <button class="login-form-btn">
                Login
              </button>
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
