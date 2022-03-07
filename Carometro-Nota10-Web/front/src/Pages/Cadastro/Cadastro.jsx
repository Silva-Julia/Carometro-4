import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import axios from "axios"
import logo from '../../assets/img/LogoNota.png'
import iconFoto from '../../assets/img/IconFoto.png';
import SideBar2 from "../../components/SideBar/SideBar2";
import "../../assets/css/style.css";
import SetinhaBranca from '../../assets/img/SetinhaBranca.png';


export default function Cadastro() {

    const [idSala, setIdSala] = useState(0)
    const [idSituacao, setIdSituacao] = useState(0);
    const [NomeAluno, setNomeAluno] = useState('');
    const [RM, setRM] = useState('');
    const [Telefone, setTelefone] = useState('');
    const [FotoPerfil, setFotoPerfil] = useState('');
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
                if (resposta.status === 200) {
                    setListaSala(resposta.data)
                    console.log(resposta)
                }
            })

            .catch(erro => console.log(erro))
    }

    const cadastrarAluno = (event) => {

        event.preventDefault();

        var formData = new FormData();

        const element = document.getElementById('fotoPerfil')
        const file = element.files[0]
        formData.append('fotoDePerfil', file, file.name)

        formData.append('idSala', idSala);
        formData.append('fotoDePerfil', FotoPerfil);
        formData.append('situacao', idSituacao);
        formData.append('nomeAluno', NomeAluno);
        formData.append('Telefone', Telefone);
        formData.append('RM', RM);

        axios({
            method: "post",
            url: "http://localhost:5000/api/Alunos/Cadastrar",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                console.log(response);
                console.log('aluno cadastrado')
              })
              .catch(function (response) {
                //handle error
                console.log(response);
              });
    }


// function cadastrarAluno(event) {
//     event.preventDefault();

//     setIsLoading(true)

//     let cadastro = {
//         idSala: idSala,
//         idSituacao: idSituacao,
//         NomeAluno: NomeAluno,
//         Telefone: Telefone,
//         RM: RM,
//         FotoPerfil: FotoPerfil
//     }


//     axios.post("http://localhost:5000/api/Alunos/Cadastrar", data: formData,
//     headers: { "Content-Type": "multipart/form-data" }, cadastro, {

//         headers: {
//             'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
//         }



//     })
//         .then(response => {
//             if (response.status === 201) {

//                 setIsLoading(false)
//                 console.log('aluno cadastrado')
//             }
//         })
//         .catch(erro => console.log(erro))

// }


useEffect(BuscarSalas, [])


return (
    <div>
        <SideBar2/>
        <div className="container_cadastro">

            <div className="box_cadastro">
                <form className="form_cadastro" onSubmit={cadastrarAluno} >
                    <div className="header_cadastro">
                        <div className="input_foto">
                            <img className="img_perfilCadastro" src={iconFoto} alt='fotoPerfil' />
                            <label htmlFor="fotoPerfil" className="input_file">Inserir Foto</label>
                            <input type='file' className="input_fil" name='fotoPerfil' id="fotoPerfil" value={FotoPerfil} onChange={(event) => setFotoPerfil(event.target.value)} />
                        </div>
                        <span className="titulo_cadastro">Cadastro</span>
                    </div>
                    <div className="body_cadastro">
                        <input type="text" className="input_cadastro" name="nomeAluno" placeholder="Nome do Aluno" value={NomeAluno} onChange={(event) => setNomeAluno(event.target.value)} />
                        <input type="text" className="input_cadastro" name="RM" placeholder="RM" value={RM} onChange={(event) => setRM(event.target.value)} />
                        <select
                            name="idSala"
                            value={idSala}
                            className="input_cadastro"
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
                        <select name="Situacao"
                            value={idSituacao}
                            onChange={event => setIdSituacao(event.target.value)}
                            className="input_cadastro"

                        >
                            <option>Situação</option>
                            <option value={true}>Aprovado</option>
                            <option value={false}>Reprovado</option>

                        </select>

                        <input type="text" className="input_cadastro" name="telefone" placeholder="Telefone" value={Telefone} onChange={(event) => setTelefone(event.target.value)} />
                        {
                            isLoading && (
                                <button onClick={() => cadastrarAluno} type="submit" className="botao_cadastro" disabled><img className="seta_cadastro" src={SetinhaBranca} alt="Seta" />Carregando...</button>
                            )
                        }
                        {
                            isLoading === false && (
                                <button onClick={() => cadastrarAluno} type="submit" className="botao_cadastro"
                                ><img className="seta_cadastro" src={SetinhaBranca} alt="Seta" /> Cadastrar</button>
                            )
                        }

                    </div>

                </form>
            </div>
        </div>
    </div>
);
}














