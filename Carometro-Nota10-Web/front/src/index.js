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
<<<<<<< HEAD
import Perfil from './Pages/Perfil/perfil';
=======
import Carometro from './Pages/Carometro/carometro';
>>>>>>> 1c9da35309f4bb80a831b33ff88967e137493f50




const routing = (
  <Router>
    <div>
      <Switch>
<<<<<<< HEAD
        <Route exact path="/" component={Home}/>
=======
<<<<<<< HEAD
        <Route exact patch="/" component={Perfil}/>
        <Route patch="/Login" component={Login}/>
=======
        <Route exact path="/" component={Login}/>
>>>>>>> 9dd3cd8cd9659bd2e3067f7376eed6d2bb6a1bad
        <Route path="/Login" component={Login}/>
        <Route path="/Carometro" component={Carometro}/>
>>>>>>> 1c9da35309f4bb80a831b33ff88967e137493f50
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root')
);

reportWebVitals();