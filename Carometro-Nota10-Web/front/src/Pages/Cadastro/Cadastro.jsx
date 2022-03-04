import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import axios from "axios"
import logo from '../../assets/img/LogoNota.png'
import iconFoto from '../../assets/img/IconFoto.png';
import SideBar2 from "../../components/SideBar/SideBar2";


export default function Cadastro(){

    // const [idSala, setIdSala] = useState(0)
    // const [idSituacao, setIdSituacao] = useState(0);
    // const [NomeAluno, setNomeAluno] = useState(0);
    // const [RM, setRM] = useState(0);
    // const [Telefone, setTelefone] = useState(0);
    // const [FotoDePerfil, setFotoDePerfil] = useState(0);
    // const [listaSala, setListaSala] = useState([]);
    // const [isLoading, setIsLoading] = useState(false)

    // function BuscarSalas() {
    //     axios.get('http://localhost:5000/api/Salas/Listar', {
    //         headers: {

    //             Authorization: 'Bearer ' + localStorage.getItem('usuario-login')
    //         }
    //     }
    //     )

    //     .then((resposta) => {
    //         if(resposta.status == 200) {
    //             setListaSala(resposta.data)
    //             console.log(resposta)
    //         }
    //     })

    //     .catch(erro => console.log(erro))
    // }


    // function cadastrarAluno(event) {
    //     event.preventDefault();
    
    //     setIsLoading(true)
    
    //     axios.post("http://localhost:5000/api/Alunos/Cadastrar",{
    //         idsala : idSala,
    //         idSituacao : idSituacao,
    //         NomeAluno : NomeAluno,
    //         Telefone : Telefone,
    //         RM : RM,
    //         FotoDePerfil : FotoDePerfil


    //     },{
            
    //         headers : {
    //             'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
    //         }
            
            
            
    //     } )
    //     .then(response => {
    //         if (response.status === 201) {
                
    //             setIsLoading(false)
    //             console.log('aluno cadastrado')
    //         }
    //     })
    //     .catch(erro => console.log(erro))

    // }

    
    // useEffect(BuscarSalas, [])
    // useEffect(cadastrarAluno, [])

    return(
        <div>
            <div className="o">
            <SideBar2/>
            <div className="centeer">
            <div className="img">
            <input type="image"></input>
            <h2>Inserir Foto</h2>
            </div>
            <h1>CADASTROCADASTRO</h1>
            <div className="formulario_cadastro input">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            </div>
            </div>
            </div>

        </div>
    );
}














