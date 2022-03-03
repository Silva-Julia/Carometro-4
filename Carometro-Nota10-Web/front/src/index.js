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
<<<<<<< HEAD
        <Route exact patch="/" component={Home}/>
        <Route patch="/Login" component={Login}/>
=======
        <Route exact path="/" component={Login}/>
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