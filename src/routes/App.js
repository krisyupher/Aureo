import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home.jsx';
import Login from '../containers/Login.jsx';
import Register from '../containers/Register.jsx';
import NotFound from '../containers/NotFound.jsx';
import Layout from '../components/Layout.jsx';
import Store from '../containers/Store.jsx';
import Perfil from '../containers/Perfil.jsx';
import SuperMaps from '../containers/SuperMaps.jsx';
import '../styles/App.scss';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/Store' component={Store} />
        <Route exact path='/Perfil' component={Perfil} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/SuperMaps' component={SuperMaps} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
