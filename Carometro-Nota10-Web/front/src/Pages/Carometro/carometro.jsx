import React, { useEffect } from 'react'
import axios from 'axios'
import  { useState } from 'react';
import "../../assets/css/style.css";
import logo from '../../assets/img/LogoNota.png';
import SideBar2 from '../../components/SideBar/SideBar2';
import PerfilFT from '../../assets/img/Perfil.png';
import setinha from '../../assets/img/setinha.png';

export default function Carometro() {

    //States
    const [listaAluno, setListaAlunos] = useState([]);
    const [listaSala, setListaSala] = useState([]);
    const [nomeAluno, setNomeAluno] = useState('');
    const [listaAlunosAchados, setListaAlunosAchados] = useState([])

    function BuscarAlunos() {

        axios.get('http://localhost:5000/api/Alunos/Buscar', {

            headers: {

                Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
            }

        })

            .then((resposta) => {

                if (resposta.status === 200) {

                    setListaAlunos(resposta.status)
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
            if(resposta.status == 200) {
                setListaSala(resposta.data)
                console.log(resposta)
            }
        })

        .catch(erro => console.log(erro))
    }

    function BuscarAluno(nomeAluno) {

        axios.get('http://localhost:5000/api/Alunos/Buscar/'+ nomeAluno, {
            headers : {
                Authorization : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })

        .then((resposta) => {
            if(resposta.status == 200) {
                setListaAlunosAchados(resposta.data)
            }
        })

    }

    useEffect(BuscarAlunos, [])
    useEffect(ListarSalas, [])

    return (
        <div>
            <header >
                <div className="container container_header">
                    <SideBar2/>
                </div>
                <div>
                    <img className="imagem_logo" src={logo} alt="Logo Nota 10" />
                    <img className="container_foto" src={PerfilFT} alt="Foto Perfil"/>
                </div>
            </header>
            <main>
                <form className="pesquisa" onSubmit={BuscarAlunos}> 
                    <input className="input_pesquisa" />
                </form>
                
                <div className='container container_alunos'>
                    {
                        <div className='box_aluno'>
                            <div className='foto_aluno'>
                                <img />
                            </div>
                            <div className='nome_aluno'>
                                <span>{nomeAluno}</span>
                            </div>
                            <div className='situacao_aluno'>
                                <span> {}</span>
                            </div>
                            <div>
                                <img className="seta" src={setinha} alt="Seta"/>
                            </div>
                        </div>
                    }
                </div>

            </main>
        </div>
    );
}