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
import Carometro from './Pages/Carometro/carometro';




const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/Login" component={Login}/>
        <Route path="/Carometro" component={Carometro}/>
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root')
);

reportWebVitals();