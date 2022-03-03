import React, { useEffect } from 'react'
import axios from 'axios'
import  { useState } from 'react';
import "../../assets/css/style.css";
import logo from '../../assets/img/LogoNota.png'


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
            <div>alunos</div>
        </div>
    );
}