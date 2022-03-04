import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom';
import { parseJwt, usuarioAutenticado } from './Services/auth';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './Pages/Login/login';
import Home from './Pages/Home/App';
import Perfil from './Pages/Perfil/perfil';
import Carometro from './Pages/Carometro/carometro';
import Cadastro from './Pages/Cadastro/Cadastro';




const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route patch="/Login" component={Login}/>
        <Route path="/Perfil" component={Perfil}/>
        <Route path="/Carometro" component={Carometro}/>
        <Route path="/Cadastro" component={Cadastro}/>

      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root')
);

reportWebVitals();