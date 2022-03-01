
import axios from 'axios';
import { parseJwt, usuarioAutenticado } from '../../Services/auth';
import { Component } from 'react';
import "../../assets/css/style.css";
import setinha from '../../assets/img/setinha.png';
import logo from '../../assets/img/LogoNota.png'


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            erroMensagem: '',
            isLoading: false,
        };
    }

    efetuarLogin = (event) => {
        event.preventDefault();

        this.setState({ erroMensagem: '', isLoading: true });

        axios.post('', {
            emailUsuario: this.state.email,
            senhaUsuario: this.state.senha,

        }).then((resposta) => {

            if (resposta.status === 200) {

                localStorage.setItem('usuario-login', resposta.data.token);

                this.setState({ isLoading: false });


                let base64 = localStorage.getItem('usuario-login').split('.')[1];

                console.log(base64);

                console.log(this.props);
            }
        })
            .catch(() => {

                this.setState({
                    erroMensagem: 'E-mail e/ou senha inválidos!',
                    isLoading: false,
                });
            });
    }

    atualizaStateCampo = (campo) => {
        this.setState({ [campo.target.name]: campo.target.value });
    };

    render(){
        return(
            <div>
                <section>
                            <div className="conteudo_login">
                                <img src={logo} className='logo' />
                                <div className="caixa_login">
                                    <form className="formulario_login" onSubmit={this.efetuarLogin}>
                                        <input className="input_login" type="email" placeholder="E-Mail" name="email" value={this.state.email} onChange={this.atualizaStateCampo} />
                                        <input className="input_login" type="password" placeholder="Senha" name="senha" value={this.state.senha} onChange={this.atualizaStateCampo} />
                                        {
                                            this.state.isLoading === true && (
                                                <button type="submit" className="botao_login" disabled><img className="seta_login" src={setinha} alt="Seta" />Carregando...</button>
                                            )
                                        }
                                        {
                                            this.state.isLoading === false && (
                                                <button type="submit" className="botao_login" disabled={
                                                    this.state.email === '' || this.state.senha === ''
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
    }
   