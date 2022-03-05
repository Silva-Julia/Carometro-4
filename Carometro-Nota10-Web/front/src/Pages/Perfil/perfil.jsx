import { useState, useEffect } from "react";

import "../../assets/css/style.css";
import axios from "axios";

import Logo from '../../assets/img/LogoPerfil.png';
import PerfilFT from '../../assets/img/Perfil.png';
import SideBar2 from "../../components/SideBar/SideBar2";

export default function Perfil() {

    
    return (
        <div>
            <SideBar2 />
            <div className="container">
                <img className="imagem_logo" src={Logo} alt="Logo Nota 10" />
                <div className="container_foto">
                    <h1 className="margin_foto" >Seu Perfil</h1>
                    <div className="contaier_foto_editar">
                        <img className="foto_perfil" src={PerfilFT} alt="Foto Perfil" />
                        <button className="estilo_editar_button">Editar Foto</button>

                    </div>
                </div>
                <div className="margin_geral_info">
                    <div>
                        <h1 className="margin_info">Nome : </h1>
                        <div className="container_info">
                            <span className="margin_left_info">Nome e Sobrenome</span>
                        </div>
                    </div>
                    <div>
                        <h1 className="margin_info margin_top_info">Email : </h1>
                        <div className="container_info">
                            <span className="margin_left_info">email@email.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}