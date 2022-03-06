import { useState, useEffect } from "react";

import "../../assets/css/style.css";
import axios from "axios";

import Logo from '../../assets/img/LogoPerfil.png';
import SetinhaBranca from '../../assets/img/SetinhaBranca.png';
import PerfilFT from '../../assets/img/Perfil.png';
import SideBar2 from "../../components/SideBar/SideBar2";
import { useParams } from "react-router-dom";

export default function Perfil() {

    const idAluno = useParams();
    const [novaFoto, setNovaFoto] = useState();
    const [aluno, setAluno] = useState();
    const [idSala, setIdSala] = useState();
    const [listaSala, setListaSala] = useState([]);

    function BuscarAlunos() {
        axios.get('http://localhost:5000/api/Alunos/Buscar', {

            headers: {

                Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
            }

        })

            .then((resposta) => {

                if (resposta.status === 200) {

                    resposta.data.map((aluno) => {
                        if (aluno.idAluno == idAluno.idAluno) {
                            setAluno(aluno)
                            console.log('achou')
                        }
                    })

                }

            })

            .catch(erro => console.log(erro))

    }

    function BuscarSalas() {
        axios.get('http://localhost:5000/api/Salas/Listar', {
            headers: {

                Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
            }
        }
        )

            .then((resposta) => {
                if (resposta.status === 200) {
                    setListaSala(resposta.data)
                }
            })

            .catch(erro => console.log(erro))
    }

    function AtualizaFotoAluno(event) {

        event.preventDefault()

        var formData = new FormData();

        const element = document.getElementById('fotoPerfil')
        const file = element.files[0]
        formData.append('foto', file, file.name)

        formData.append('foto', novaFoto);


        axios({
            method: "put",
            url: "http://localhost:5000/api/Alunos/Atualizar/Foto/" + aluno.idAluno,
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
            auth: 'Bearer ' + localStorage.getItem('usuario-login')
        })

            .then((resposta) => {
                if (resposta.status === 200) {
                    BuscarAlunos();
                    BuscarSalas ();
                    console.log('foi')
                }
            })

            .catch(erro => console.log(erro))
    }

    function AtualizaSalaDoAluno(event) {

        event.preventDefault()

        axios.put(`http://localhost:5000/api/Alunos/Atualizar/Sala/${idAluno}/${idSala}`, {
            headers: {

                Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
            }
        }
        )

            .then((resposta) => {
                if (resposta.status === 200) {
                    BuscarAlunos();
                    BuscarSalas ();
                }
            })

            .catch(erro => console.log(erro))

    }

    useEffect(BuscarAlunos, [])
    useEffect(BuscarSalas, [])

    return (
        <div>
            <SideBar2 />
            <div className="container">
                <img className="imagem_logo" src={Logo} alt="Logo Nota 10" />
                <div className="container_foto">

                      {/* <h1 className="margin_foto" >{aluno.nomeAluno}</h1>
                    <div className="contaier_foto_editar">
                        <img className="foto_perfil" src={"data:image/png;base64," + aluno.fotoDoPerfil} alt="Foto Perfil" />
                    </div>   */}
                </div>
                <div className="margin_geral_info">
                    <div>
                        <h1 className="margin_info">Escolher foto : </h1>
                        <input
                            type='file'
                            className="input_fil"
                            name='fotoPerfil'
                            id="fotoPerfil"
                            value={novaFoto}
                            placeholder="Escolher foto"
                            onChange={(event) => setNovaFoto(event.target.value)}
                        />

                        <button onClickCapture ={AtualizaFotoAluno} type="submit" 
                        ><img src={SetinhaBranca} alt="Seta" />Atualizar</button>
                    </div>
                    <div>
                        <h1 className="margin_info margin_top_info">Escolher Nova Sala:  </h1>
                        <div className="container_info_perfil">
                            <select
                                name="idSala"
                                value={idSala}
                                className="input_cadastro_perfil"
                                onChange={(event) => setIdSala(event.target.value)}

                            >
                                <option value="#">Turma</option>

                                {listaSala.map((event) => {
                                    return (

                                        <option key={event.idSala} value={event.idSala}>{event.nomeSala}
                                        </option>
                                    );
                                })}
                            </select>

                            <button onClick={() => AtualizaSalaDoAluno} type="submit" className="botao_cadastro_perfil"
                            ><img className="seta_cadastro_perfil" src={SetinhaBranca} alt="Seta" />Atualizar</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}