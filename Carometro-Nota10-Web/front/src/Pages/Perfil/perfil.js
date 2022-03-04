import { useState, useEffect } from "react";

import "../Perfil/perfil.css"
import axios from "axios";

import Logo from '../../assets/img/LogoPerfil.png';
import PerfilFT from '../../assets/img/Perfil.png';

export default function Perfil(){
    return(
        <div className="container_fundo">
            <div className="container">
                <img className="imagem_logo" src={Logo} alt="Logo Nota 10" />
                <div className="container_foto">
                    <h1>Seu Perfil</h1>
                    <div className="contaier_foto_editar">
                        <img src={PerfilFT} alt="Foto Perfil" />
                        <button>Editar Foto</button>
                    
                    </div>
                </div>
                <div>
                    <div>
                        <h1>Nome : </h1>
                        <span>Test</span>
                    </div>
                    <div>
                        <h1>Email : </h1>
                        <span>email@email.com</span>
                    </div>
                </div>
            </div>
        </div>
    );
}