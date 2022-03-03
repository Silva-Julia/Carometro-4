import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/LogoNota.png'
import '../../assets/css/style.css';
import setinha from '../../assets/img/setinha.png';
import Navbar from '../../components/Header/NavBar';
import { useState, useEffect } from 'react';

export default function Home() {

  const [ listaSalas, setListaSalas ] = useState( [] )
  const [isLoading, setIsLoading] = useState(false)

  function salasDisponiveis(){
    axios.get('http://localhost:5000/api/Salas/Listar', {
        headers : {
            'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
        }
    } )

    .then(resposta => {
        if(resposta.status === 200){

            setListaSalas(resposta.data)
            console.log(listaSalas)
        }
    })
    .catch(erro => console.log(erro))
}

useEffect(salasDisponiveis, [])


  return (
    <div>
      <header>
        <div className="container container_header">
          <Navbar/>
        </div>
      </header>
      <main>
      <div className='container_salas'>
        {
            listaSalas.map((event) => {
              console.log(event)
                return(
                  <div className='box_sala container'>
                    <div className='box_titulo'>
                      <span>Sala: {event.nomeSala}</span>
                    </div>
                    <img src={setinha} />
                  </div>
                )
            })
          }
        </div>
      </main>
    </div>
  );
};
