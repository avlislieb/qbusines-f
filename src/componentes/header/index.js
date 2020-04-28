import React from 'react';

import logo from '../../assets/logo1.png';
//import Routes from '../../routes';

import { Link, NavLink } from 'react-router-dom';
import { Button, Navbar, NavDropdown, Form, Nav, FormControl } from 'react-bootstrap';

// const header = ()=>(
//     <>
//     </>
// );

export default function header( { history }){
  return (
      <>
          <div className="container-fluid p-0">
              <Navbar bg="dark" expand="lg"  fixed="top" variant="dark">
                  <Navbar.Brand href="/">
                    <img className='w-50' src={ logo } alt="logo-img"/>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="ml-auto links-nav-bar">
                            <Nav.Link href="/">Home</Nav.Link>                
                            <NavDropdown title="Produtos" id="basic-nav-dropdown">
                              <NavDropdown.Item href="/produtos/brindes-personalizados">Brindes Personalizados</NavDropdown.Item>
                                  <NavDropdown.Item href="/produtos/brindes-executivos">Brindes Executivos</NavDropdown.Item>
                                  <NavDropdown.Item href="/produtos/uniformes">uniformes</NavDropdown.Item>
                                  <NavDropdown.Item >dia de campo</NavDropdown.Item>
                            </NavDropdown>

                    
                            <Nav.Link href="#link">Empresa</Nav.Link>
                            <Nav.Link href="#link">Contato</Nav.Link>
                      </Nav>
                  </Navbar.Collapse>
              </Navbar>
          </div>
      </>

  );
}

//export default header;