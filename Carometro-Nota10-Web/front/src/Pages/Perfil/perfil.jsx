import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../../assets/css/style.css";
import axios from "axios";

import Logo from '../../assets/img/LogoPerfil.png';
import SetinhaBranca from '../../assets/img/SetinhaBranca.png';
import PerfilFT from '../../assets/img/Perfil.png';
import SideBar2 from "../../components/SideBar/SideBar2";
import { useParams } from "react-router-dom";

export default function Perfil() {

    const history = useHistory();
    const idAluno = useParams();
    const [NovaFoto, setNovaFoto] = useState('');
    const [aluno, setAluno] = useState([]);
    const [idSala, setIdSala] = useState(0);
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

    async function AtualizaFotoAluno(event) {

        event.preventDefault()

        var formData = new FormData();

        const element = document.getElementById('alunoFoto')
        const file = element.files[0]
        formData.append('alunoFoto', file, file.name)
        formData.append('alunoFoto', NovaFoto);


        axios({
            method: "put",
            url: "http://localhost:5000/api/Alunos/Atualizar/Foto/" + aluno.idAluno,
            data: formData,
            headers: { "Content-Type": "multipart/form-data", "Authorization": 'Bearer ' + localStorage.getItem('usuario-login') },

        })

            .then((resposta) => {
                if (resposta.status === 200) {
                    BuscarAlunos();
                    BuscarSalas();
                    console.log('foi')
                }
            })

            .catch(erro => console.log(erro))
    }

    function AtualizaSalaDoAluno(event) {

        event.preventDefault()

        axios.put(`http://localhost:5000/api/Alunos/Atualizar/Sala/${idAluno.idAluno}/${idSala}`, {}, {
            headers: {

                Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
            }
        }
        )

            .then((resposta) => {
                if (resposta.status === 200) {
                    BuscarAlunos();
                    BuscarSalas();
                    console.log('foi')
                }
            })

            .catch(erro => console.log(erro))

    }

    function ExcluirAluno(idAluno) {
        axios.delete('http://localhost:5000/api/Alunos/Excluir/' + idAluno, {
            headers: {

                Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
            }
        }
        )

            .then((resposta) => {
                if (resposta.status === 200) {
                    console.log('foi')
                }
            })

            .catch(erro => console.log(erro))
    }

    useEffect(BuscarAlunos, [])
    useEffect(BuscarSalas, [])

    return (
        <div>
            <SideBar2 />
            <main>
                <div className="container">
                    <img className="imagem_logo" src={Logo} alt="Logo Nota 10" />
                    <div className="container_foto">

                        <h1 className="margin_foto" >{aluno.nomeAluno}</h1>
                        <div className="contaier_foto_editar">
                            <img className="foto_perfil" src={"data:image/png;base64," + aluno.fotoDoPerfil} alt="Foto Perfil" />
                        </div>
                    </div>
                    <div className="margin_geral_info">
                        <div>
                            <h1 className="margin_info">Escolher foto : </h1>
                            <label htmlFor="alunoFoto" className="input_file_perfil">Inserir Foto</label>
                            <input
                                type='file'
                                className="input_fil"
                                name='alunoFoto'
                                id="alunoFoto"
                                value={NovaFoto}
                                placeholder="Escolher foto"
                                onChange={(event) => setNovaFoto(event.target.value)}
                            />
                            <button placeholder="Atualizar" className="botao_cdSala_perfil" onClick={(AtualizaFotoAluno)}><img className="seta_cdSala" src={SetinhaBranca} />Atualizar</button>
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
                                    <option value="0">Turma</option>
                                    {listaSala.map((event) => {
                                        return (

                                            <option key={event.idSala} value={event.idSala}>{event.nomeSala}
                                            </option>
                                        );
                                    })}
                                </select>


                            </div>

                            <button
                                placeholder="Atualizar"
                                className="botao_cdSala_escolha_perfil"
                                onClick={(AtualizaSalaDoAluno)}>
                                <img className="seta_cdSala" src={SetinhaBranca}
                                />Atualizar</button>
                        </div>
                        <button
                        placeholder="Atualizar"
                        className="botao_cdSala_excluir_perfil"
                        onClick={() => {
                           let resultado = window.confirm(`Deseja realmente excluir o aluno(a) ${aluno.nomeAluno} ?`)
                            if(resultado){
                                ExcluirAluno(aluno.idAluno)
                                history.push(`/Carometro/${aluno.idAluno}`)
                            }}}>
                        <img className="seta_cdSala" src={SetinhaBranca}
                        />Exluir Aluno</button>
                    </div>


                </div>
            </main>
        </div>
    );
}