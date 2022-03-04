import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Burger from './Burguer';
import logoHeader from '../../assets/img/Logo_Header.png'

const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;

  display: flex;
  justify-content: space-between;
  .logo_header {
    height: 90px;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <Burger />          
      <Link to="/" ><img className="logo_header" src={logoHeader} alt="logo"/></Link>
    </Nav>
  )
}

export default Navbar