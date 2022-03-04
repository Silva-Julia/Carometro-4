import React from 'react';
import styled from 'styled-components';
import iconFoto from '../../assets/img/IconFoto.png';

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
    transform: ${({ open }) => open ? 'translateX(0%)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 400px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      font-size: 22px;
      border-bottom: 1px solid #6E6E6E;
    }
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


const LeftNav = ({ open }) => {
  return (
    <Ul open={open}>
      <div className='box_userName'>
        <img className='icon_foto' src={iconFoto}/>
        <li>Username</li>
      </div>
      <li>Cadastro</li>
      <li>Turmas</li>
    </Ul>
  )
}

export default LeftNav