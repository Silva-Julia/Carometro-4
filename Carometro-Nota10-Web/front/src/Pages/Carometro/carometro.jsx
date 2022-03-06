import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
import "../../assets/css/style.css";
import logo from '../../assets/img/Logo_Header.png';
import SideBar2 from '../../components/SideBar/SideBar2';
import PerfilFT from '../../assets/img/icon-foto-carometro.png';
import FotoPadrao from '../../assets/img/imagem-usuario-padrao.png';
import Lupa from '../../assets/img/lupa.png';
import setinha from '../../assets/img/setinha.png';
import { Modall } from '../../components/Modals/Modal';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

export default function Carometro() {

    //States
    const idSala = useParams();
    const [listaAlunos, setListaAlunos] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [listaSala, setListaSala] = useState([]);
    const [nomeAluno, setNomeAluno] = useState('');
    const [idAlunoModal, setIdAlunoModal] = useState(0)
    const [listaAlunosAchados, setListaAlunosAchados] = useState([])
    const OpenModal = () => {
        setShowModal(prev => !prev);
    }

    function BuscarAlunos() {
console.log(idSala)
        axios.get('http://localhost:5000/api/Alunos/Buscar', {

            headers: {

                Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
            }

        })

            .then((resposta) => {

                if (resposta.status === 200) {

                    setListaAlunos(resposta.data)
                    console.log(resposta)

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
                    setListaSala(resposta.data)
                    console.log(resposta)
                }
            })

            .catch(erro => console.log(erro))
    }

    function BuscarAluno(nomeAluno) {

        axios.get('http://localhost:5000/api/Alunos/Buscar/' + nomeAluno, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })

            .then((resposta) => {
                if (resposta.status == 200) {
                    setListaAlunosAchados(resposta.data)
                }
            })

    }

    useEffect(BuscarAlunos, [])
    useEffect(ListarSalas, [])

    return (
        <div>
              <Modall aluno={listaAlunos.find(aluno => aluno.idAluno == idAlunoModal)} showModal={showModal} setShowModal={setShowModal} /> 
        
            <div className='container'>
          
            <div className="container_header_carometro">
                <img className="imagem_logo" src={logo} alt="Logo Nota 10" />
                <img className="container_foto_carometro" src={PerfilFT} alt="Foto Perfil" />
            </div>

            <SideBar2 />

            <div className='box_pesquisa-carometro'>
                <form className='box_pesquisa_input'>
                    <img className='lupa_pesquisa_carometro' src={Lupa} />
                    <input className="input_pesquisa_carometro" type='search' />
                </form>
            </div>



            <main className='main_carometro'>
                <div className='container_box_alunos'>
                    {

                        listaAlunos.map((aluno) => {

                            if(aluno.idSala == idSala.idSala) {
                                return (
                                    <div key={aluno.id} className='card_aluno_carometro'>
                                        <div className='foto_aluno_box_carometro'>
                                            <img className='foto_aluno' src={aluno.fotoDoPerfil === "foto" ?
                                                FotoPadrao : "data:image/png;base64," + aluno.fotoDoPerfil} />
                                        </div>
                                        <div className='box_dados_alunos_carometro'>
                                            <span className='nome_aluno'>{aluno.nomeAluno}</span>
                                            <span
                                                className='situacao_aluno'
    
                                                style={{
                                                    'color': aluno.situacao === true ?
                                                        '#12FE0D' : '#E40A0A'
                                                }}
                                            >{
                                                    aluno.situacao === true ?
                                                        'Aprovado' : 'Reprovado'
    
                                                }</span>
                                        </div>
                                        <a onClick={OpenModal} onClickCapture = {() =>setIdAlunoModal(aluno.idAluno)} className='seta_aluno_carometro'>
                                            <img className="seta" src={setinha} alt="Seta" />
                                        </a>
                                    </div>
                                );
                            }
                        })
                    }
                </div>
            </main>
        </div>
    </div>
    );
}