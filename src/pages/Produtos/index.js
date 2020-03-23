import React, { useEffect, useState } from 'react';
import './style.css';
import { useParams } from 'react-router-dom';
import { Nav, Navbar, Row, Col, Container, Card, Button } from 'react-bootstrap';


import api from '../../service/api'

export default function Produtos(){
    const [ categorias, setCategorias, setCategoriaEspecifica ] = useState([]); 
    const [ produtos, setProdutos ] = useState([]);
    
    let { nomeCategoria } = useParams();
    useEffect(()=>{
    
        async function loadCategorias(){
            console.log(nomeCategoria, 'nomeCategoria');
            const response = await api.get(`produtos/${nomeCategoria}`); 
            console.log(response, 'responde');
            setCategorias(response.data[0].categoria);

            setProdutos(response.data[0].listaProdutosDestaque);
           
        }
        loadCategorias(nomeCategoria);
    }, []);
    
    async function loadProdutosDeCategoria(categoriaId){
        console.log('categoria-enrtou', categoriaId);
        const response = await api.get(`produtos/${nomeCategoria}`); 
        console.log(response, 'response-prod');
    }

    let cardHeaderStyle =  {
        // backgroundSize: cover,
        backgroundImage: ``,
        heigth: 200,
        // backgroundRepeat: no-repeat,

    }    
    return (
        <>
            <Container>
                <Row>
                    <Col lg={4} key={1} md={12}>
                        <Row>
                            <Col lg={12} md={6} xs>
                                <h1>Categorias</h1>
                            </Col>

                            <Col lg={12} md={6} xs>
                            <Navbar expand="lg">
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto links-nav-bar flex-column">
                                    {categorias.map(categoria => (
                                        <Nav.Link key={ categoria.id }>
                                            <div onClick={ loadProdutosDeCategoria(categoria.id) } >
                                                { categoria.nome }
                                            </div>
                                            
                                        </Nav.Link>
                                    ))}    
                                </Nav>    
                                </Navbar.Collapse>
                            </Navbar>
                            </Col>

                        </Row>
                        
                        
                    </Col>
                    <Col key={2} lg={8} md={12}>
                        <Row>
                            <Col xs={12}><h1>prod - {nomeCategoria}</h1></Col>
                            
                                {produtos.map(produto =>(
                                    <Col key={produto.id} lg={4} md={6} xs>              
                                        <Card  className="cardProdutos" >
                                        
                                            <Card.Header className="cardProdutosHeader" style={{ backgroundImage: `url(${produto.imagem})` }}>
                                                
                                            </Card.Header>
                                            
                                            <Card.Body>
                                                <Card.Title>{ produto.nome }</Card.Title>
                                                <Card.Text>{ produto.descricao }</Card.Text>
                                                <Button variant="primary">Solicitar orçamento</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>    
                                ))}

                            
                            
                        </Row>
                    

                    
                    
                        
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