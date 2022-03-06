import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import iconFoto from '../../assets/img/IconFoto.png';
import { Link } from 'react-router-dom';
import { parseJwt } from "../../Services/auth";
import axios from 'axios';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: left;
  li {
    padding: 45px 10px 35px 55px;
  }
  @media (max-width: 1920px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: 'translateX(0%)' : 'translateX(100%)'};
    top: 0;
    left: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      font-size: 22px;
      border-bottom: 1px solid #6E6E6E;
    }
    a {
      color: #fff;
      font-size: 22px;
      border-bottom: 1px solid #6E6E6E;
      text-decoration: none;
      padding: 45px 10px 35px 55px;
    };
    .icon_foto{
      height: 70px;
      width: 70px;
      margin: 45px 10px 0 55px;
    }
    .box_userName{
      display: flex;
      flex-direction: column;
      
    }
  }
`;





const SideBar2 = ({ open }) => {

  return (
    <Ul>
      <div className='box_userName'>
        <img className='icon_foto' src={iconFoto}/>
        <li>{parseJwt().nome}</li>
      </div>
      {
        parseJwt().role === "1" && <Link to = "/Cadastro">Cadastrar</Link>
      }
      <Link to = "/Turmas">Turmas</Link>
    </Ul>
  )
}

export default SideBar2