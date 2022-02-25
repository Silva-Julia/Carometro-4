import axios from 'axios';
import { Link } from 'react-router-dom';

import '../../assets/css/style.css';


export default function Home() {
  return (
    <div>
      <header>
        <div className="container container_header">
          <nav className="nav_header">
            <Link to="/MapaBrasil" className="redirecionamento_header zoom">localizacoes</Link>
            <Link to="/Consultas" className="redirecionamento_header zoom">agendamento</Link>
            <Link to="/ConsultasPaciente" className="redirecionamento_header zoom">consultas</Link>
            <Link to="/Login" className="redirecionamento_header zoom">login</Link>
          </nav>
        </div>
      </header>
    </div>
  );
};
