import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import axios from "axios"
import logo from '../../assets/img/LogoNota.png'
import iconFoto from '../../assets/img/IconFoto.png';
import SideBar2 from "../../components/SideBar/SideBar2";
import "../../assets/css/style.css";


export default function Cadastro() {

    const [idSala, setIdSala] = useState(0)
    const [idSituacao, setIdSituacao] = useState(0);
    const [NomeAluno, setNomeAluno] = useState([]);
    const [RM, setRM] = useState([]);
    const [Telefone, setTelefone] = useState([]);
    const [FotoPerfil, setFotoPerfil] = useState([]);
    const [Sala, setSala] = useState([]);
    const [listaSala, setListaSala] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    function BuscarSalas() {
        axios.get('http://localhost:5000/api/Salas/Listar', {
            headers: {

                Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
            }
        }
        )

            .then((resposta) => {
                if (resposta.status == 200) {
                    setListaSala(resposta.data)
                    console.log(resposta)
                }
            })

            .catch(erro => console.log(erro))
    }


    function cadastrarAluno(event) {
        event.preventDefault();

        setIsLoading(true)

        axios.post("http://localhost:5000/api/Alunos/Cadastrar", {
            idsala: idSala,
            idSituacao: idSituacao,
            NomeAluno: NomeAluno,
            Telefone: Telefone,
            Sala: Sala,
            RM: RM,
            FotoPerfil: FotoPerfil


        }, {

            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }



        })
            .then(response => {
                if (response.status === 201) {

                    setIsLoading(false)
                    console.log('aluno cadastrado')
                }
            })
            .catch(erro => console.log(erro))

    }


    useEffect(BuscarSalas, [])
    useEffect(cadastrarAluno, [])

    return (
        <div>
            <SideBar2 />
            <div className="container_cadastro">
                <div className="box_cadastro">
                    <form className="form_cadastro">
                        <div className="header_cadastro">
                            <div className="input_foto">
                                <img className="img_perfilCadastro" src={iconFoto} />
                                <label for="fotoPerfil" className="input_file">Inserir Foto</label>
                                <input type='file' className="input_fil" name='fotoPerfil' value={FotoPerfil} onChange={(event) => setFotoPerfil(event.target.value)} />
                            </div>
                            <span className="titulo_cadastro">Cadastro</span>
                        </div>
                        <div className="body_cadastro">
                            <input type="text" className="input_cadastro" name="nomeAluno" placeholder="Nome do Aluno" value={NomeAluno} onChange={(event) => setNomeAluno(event.target.value)} />
                            <input type="text" className="input_cadastro" name="RM" placeholder="RM" value={RM} onChange={(event) => setRM(event.target.value)} />
                            <input type="text" className="input_cadastro" name="Sala" placeholder="Turma" value={Sala} onChange={(event) => setSala(event.target.value)} />
                            <select className="input_cadastro" name="Situacao" onChange={(evt) => setIdSituacao(evt.target.value)} id="">
                                <option value="#">Situação</option>
                                {
                                    listaSala.map((event) => {

                                        return (

                                            <option key={event.idSituacao} value={event.idSituacao}>{event.Situacao[0].situacao}</option>
                                        )
                                    })
                                }
                            </select>
                            <input type="text" className="input_cadastro" name="telefone" placeholder="Telefone" value={Telefone} onChange={(event) => setTelefone(event.target.value)} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}














