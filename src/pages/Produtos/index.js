import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { Nav, Navbar, Row, Col, Container } from 'react-bootstrap';


import api from '../../service/api'

export default function Produtos(){
    const [ categorias, setCategorias ] = useState([]); 

    let { nomeCategoria } = useParams();
    useEffect(()=>{
        
        async function loadCategorias(){
            console.log(nomeCategoria, 'nomeCategoria');
            const response = await api.get(`produtos/${nomeCategoria}`); 
            setCategorias(response.data);
            console.log(response, 'responde');
        }
        loadCategorias(nomeCategoria);
    }, []);
    
    
    return (
        <>
            <Container>
                <Row>
                    <Col lg={4} md={12}>
                        <h1>Categorias</h1>
                        <Navbar expand="lg">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto links-nav-bar flex-column">
                                    {categorias.map(categoria => (
                                        <Nav.Link key={ categoria.id } eventKey={ categoria.id }>
                                            { categoria.nome }
                                        </Nav.Link>
                                    ))}    
                                </Nav>    
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                    <Col lg={8} md={12}>

                        <h1>prod - {nomeCategoria}</h1>
                    </Col>

                </Row>
            </Container>
              
        
        </>
    )
}

// export default class Produtos extends React.Component{
//     constructor(){
//         super();
//     }
//     render(){
//         loadCategorias(this.props.match.params.nomeCategoria);  
//         return(
//             <>
//                 <h1>prod</h1>
//             </>
//         );
//     }
// }


// async function loadCategorias(param){
//     let  nomeCategoria  = 'brindes-personalizados' // this.props.match.params;
//     nomeCategoria = param;
//     //nomeCategoria = this.props.match.params.nomeCategoria;
//     console.log(nomeCategoria, 'nomeCategoria');

//     const response = await api.get(`produtos/${nomeCategoria}`); 

//     console.log(response, 'responde');
// }