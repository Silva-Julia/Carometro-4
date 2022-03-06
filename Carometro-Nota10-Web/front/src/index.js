import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
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
        <Route exact path="/" component={Login}/>
        <Route path="/Turmas" component={Home}/>
        <Route path="/Perfil/:idAluno" component={Perfil}/>
        <Route path="/Carometro/:idSala" component={Carometro}/>
        <Route path="/Cadastro" component={Cadastro}/>
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root')
);

reportWebVitals();