import { useHistory } from 'react-router-dom';
import { parseJwt } from "../../Services/auth";
import axios from 'axios';
import React, { useState } from 'react';
import "../../assets/css/style.css";
import setinha from '../../assets/img/setinha.png';
import logo from '../../assets/img/LogoNota.png'


export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erroMensagem, setErroMensagem] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    let history = useHistory();

    function EfetuarLogin(event) {
        event.preventDefault();



        setIsLoading(true);

        axios.post('http://localhost:5000/api/Login', {
            email: email,
            senha: senha,

        }).then((resposta) => {

            if (resposta.status === 200) {

                localStorage.setItem('usuario-login', resposta.data.token);

                setIsLoading(false)


                let base64 = localStorage.getItem('usuario-login').split('.')[1];

                console.log(base64);


                console.log(parseJwt().jti === 1);
                


                history.push('/Cadastro')
            }
        })
        .catch(erro => {
            console.log(erro)


            setErroMensagem("E-mail e/ou Senha inválidos")

            setIsLoading(false)
        })
    }



    return (
        <div>
            <section>
                <div className="conteudo_login">
                    <img src={logo} className='logo' />
                    <div className="caixa_login">
                        <form className="formulario_login" onSubmit={EfetuarLogin}>
                            <input className="input_login" type="email" placeholder="E-Mail" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                            <input className="input_login" type="password" placeholder="Senha" name="senha" value={senha} onChange={(event) => setSenha(event.target.value)} />
                            {
                                isLoading === true && (
                                    <button type="submit" className="botao_login" disabled><img className="seta_login" src={setinha} alt="Seta" />Carregando...</button>
                                )
                            }
                            {
                                isLoading === false && (
                                    <button type="submit" className="botao_login" disabled={
                                        email === '' || senha === ''
                                            ? 'none'
                                            : ''
                                    }><img className="seta_login" src={setinha} alt="Seta" /> Entrar</button>
                                )
                            }
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

