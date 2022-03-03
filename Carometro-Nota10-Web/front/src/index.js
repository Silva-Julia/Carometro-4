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




const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact patch="/" component={Login}/>
        <Route patch="/Login" component={Login}/>
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root')
);

reportWebVitals();