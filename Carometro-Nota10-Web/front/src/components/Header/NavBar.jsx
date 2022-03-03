import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Burger from './Burguer';
import logo from '../../assets/img/LogoNota.png'

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo_header {
    padding: 15px 0;
    height: 120px;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <Burger />          
      <Link to="/" ><img className="logo_header" src={logo} alt="logo"/></Link>
    </Nav>
  )
}

export default Navbar