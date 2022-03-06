import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/LogoNota.png'
import '../../assets/css/style.css';
import SetinhaBranca from '../../assets/img/SetinhaBranca.png';
import Navbar from '../../components/Header/NavBar';
import { useState, useEffect } from 'react';


export default function Home() {

  const [listaSalas, setListaSalas] = useState([])
  const [listaProfessores, setListaProfessores] = useState([])
  const [idProfessor, setIdProfessor] = useState(0)
  const [nomeSala, setNomeSala] = useState('')
  const [numeroSala, setNumeroSala] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  function professores() {
    axios('http://localhost:5000/api/Professores/Buscar', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
      }
    })

      .then(resposta => {
        if (resposta.status === 200) {
          setListaProfessores(resposta.data)
        }
      })
      .catch(erro => console.log(erro))
  }




  function cadastrarConsulta(event) {
    event.preventDefault();

    setIsLoading(true)

    axios.post("http://localhost:5000/api/Salas", {
      idProfessor: idProfessor,
      numeroSala: numeroSala,
      nomeSala: nomeSala
    }, {

      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
      }



    })
      .then(response => {
        if (response.status === 201) {

          setIsLoading(false)
          ListarSalas()
        }
      })
      .catch(erro => console.log(erro))
  }

  function ListarSalas() {
    axios.get('http://localhost:5000/api/Salas/Listar', {
      headers: {

        Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
      }
    }
    )

      .then((resposta) => {
        if (resposta.status === 200) {
          setListaSalas(resposta.data)
          console.log(resposta)
        }
      })

      .catch(erro => console.log(erro))
  }
  useEffect(professores, [])
  useEffect(ListarSalas, [])


  return (
    <div>
      <header>
        <div className="container container_header">
          <Navbar />
        </div>
      </header>
      <main>
        <div className='container organizador_box'>
          <div className='container_cdSala'>
            <span className='titulo_cdSala'>cadastrar sala</span>
            <form onSubmit={cadastrarConsulta} className="form_cdSala">
              <div className="formulario_cdSala">
                <input type="text" className="input_cdSala" placeholder='Nome da sala' name='nomeSala' value={nomeSala} onChange={(event) => setNomeSala(event.target.value)} />
                <input type="text" className="input_cdSala" placeholder='Numero da sala' name='numeroSala' value={numeroSala} onChange={(event) => setNumeroSala(event.target.value)} />
                <select
                  name="idProfessor"
                  value={idProfessor}
                  className="input_cdSala"
                  onChange={(evt) => setIdProfessor(evt.target.value)}
                  required
                >
                  <option value="#">Selecione o nome do professor</option>

                  {
                    listaProfessores.map((professor) => {
                      return (

                        <option key={professor.idProfessor} value={professor.idProfessor}>
                          {professor.nomeUsuario}
                        </option>
                      );
                    })}

                </select>
                {
                  isLoading === false && (
                    <button type="submit" className="botao_cdSala" disabled><img className="seta_cdSala" src={SetinhaBranca} alt="Seta" />Carregando...</button>
                  )
                }
                {
                  isLoading === true && (
                    <button type="submit" className="botao_cdSala" disabled={
                      nomeSala === '' || numeroSala === '' || idProfessor === [0]
                        ? 'none'
                        : ''
                    }><img className="seta_cdSala" src={SetinhaBranca} alt="Seta" /> Cadastrar</button>
                  )
                }
              </div>
            </form>
          </div>
          <div className='container_salas'>
            {
              listaSalas.map((event) => {
                console.log(event)
                return (
                  <div className='box_sala'>
                    <div className='box_titulo'>
                      <span>Turma {event.nomeSala}</span>
                    </div>
                    <div className='box_body'>
                      <span> Sala {event.numeroSala}</span>
                      <span>Professor {event.idProfessorNavigation.idUsuarioNavigation.nomeUsuario} </span>
                    </div>
                    <button className='btn_redirect'><img src={SetinhaBranca} /></button>
                  </div>
                )
              })
            }
          </div>

        </div>
      </main>
    </div>
  );
};
