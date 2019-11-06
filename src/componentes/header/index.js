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
          <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="/home">
              <img className='w-50' src={ logo } alt="logo-img"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto links-nav-bar">
                <Nav.Link href="/">Home</Nav.Link>                
                <NavDropdown title="Produtos" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/produtos/brindes-personalizados">Brindes Personalizados</NavDropdown.Item>
                    <NavDropdown.Item href="/produtos/brindes-executivos">Brindes Executivos</NavDropdown.Item>
                    <NavDropdown.Item href="/produtos/uniformes">uniformes</NavDropdown.Item>
                    <NavDropdown.Item >dia de campo</NavDropdown.Item>

                  {/* <NavDropdown.Divider /> 
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                </NavDropdown>

                <NavDropdown title="Brindes executivos" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Agenda</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">caneta</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">chaveiro</NavDropdown.Item>
                  {/* <NavDropdown.Divider /> 
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                </NavDropdown>
                <Nav.Link href="#link">Uniformes personalizados</Nav.Link>
                <Nav.Link href="#link">Materiais promossionais</Nav.Link>
              </Nav>
              {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form> */}
            </Navbar.Collapse>
          </Navbar>
        </div>
      </>

  );
}

//export default header;