import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/LogoNota.png'
import '../../assets/css/style.css';
import setinha from '../../assets/img/setinha.png';
import Navbar from '../../components/Header/NavBar';
import { useState, useEffect } from 'react';
import SideBar2 from '../../components/SideBar/SideBar2';

export default function Home() {

  const [ listaSalas, setListaSalas ] = useState( [] )
  const [isLoading, setIsLoading] = useState(false)



  function ListarSalas() {
    axios.get('http://localhost:5000/api/Salas/Listar', {
        headers: {

            Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
        }
    }
    )

    .then((resposta) => {
        if(resposta.status == 200) {
            setListaSalas(resposta.data)
            console.log(resposta)
        }
    })

    .catch(erro => console.log(erro))
}

useEffect(ListarSalas, [])


  return (
    <div>
      <header>
        <div className="container container_header">
          <SideBar2/>
        </div>
      </header>
      <main>
        <div className='container container_salas'>
          {
              listaSalas.map((event) => {
                console.log(event)
                  return(
                    <div className='box_sala'>
                      <div className='box_titulo'>
                        <span>Turma: {event.nomeSala}</span>
                      </div>
                      <div className='box_body'>
                        <span>Sala: {event.numeroSala}</span>
                        <span>Professor: {event.idProfessorNavigation.idProfessor} </span>
                      </div>
                      <button className='btn_redirect'><img src={setinha} /></button>
                    </div>
                  )
              })
            }
          </div>
      </main>
    </div>
  );
};
