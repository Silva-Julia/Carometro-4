import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/LogoNota.png'
import '../../assets/css/style.css';
import SetinhaBranca from '../../assets/img/SetinhaBranca.png';
import Navbar from '../../components/Header/NavBar';
import { useState, useEffect } from 'react';


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
          <Navbar/>
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
                        <span>Turma {event.nomeSala}</span>
                      </div>
                      <div className='box_body'>
                        <span> {event.numeroSala}</span>
                        <span>Professor {event.idProfessorNavigation.idUsuarioNavigation.nomeUsuario} </span>
                      </div>
                      <button className='btn_redirect'><img  src={SetinhaBranca}/></button>
                    </div>
                  )
              })
            }
          </div>
      </main>
    </div>
  );
};
