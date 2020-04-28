import React, { useEffect, useState } from 'react';
import './style.css';
import { useParams, Link } from 'react-router-dom';
import { Nav, Navbar, Row, Col, Container, Card, Button, Image, Accordion, useAccordionToggle } from 'react-bootstrap';


import api from '../../service/api'

export default function Produtos(){
    const [ categorias, setCategorias ] = useState([]); 
    const [ produtos, setProdutos ] = useState([]);
    
    let { nomeCategoria } = useParams();
    useEffect(()=>{
    
        /*async function loadCategorias(){
            console.log(nomeCategoria, 'nomeCategoria');
            const response = await api.get(`produtos/${nomeCategoria}`); 
            console.log(response, 'responde');
            setCategorias(response.data[0].categoria);

            setProdutos(response.data[0].listaProdutosDestaque);
           
        }
        loadCategorias(nomeCategoria);*/
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
                    <Col lg={3} key={1} md={12}>
                        <Row>
                            <Col lg={12} md={6} xs>
                                <h2>Categorias</h2>
                            </Col>

                            <Col lg={12} md={6} xs>
                            <Navbar className="nav-lateral-categorias" expand="lg">
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="text-center links-nav-bar flex-column">
                                    {/*categorias.map(categoria => (
                                        <Nav.Link key={ categoria.id }>
                                            <div onClick={ loadProdutosDeCategoria(categoria.id) } >
                                                { categoria.nome }
                                            </div>
                                            
                                        </Nav.Link>
                                    ))*/}
                                        <div>
                                            Cadernos
                                        </div>
                                        <div>
                                            Agendas
                                        </div>
                                        <div>
                                            Canecas
                                        </div>
                                        <div>
                                            Canivetes
                                        </div>
                                        <div>
                                            Chaveiros
                                        </div>
                                        
                                </Nav>    
                                </Navbar.Collapse>
                            </Navbar>
                            </Col>

                        </Row>
                        
                        
                    </Col>
                    <Col key={2} lg={9} md={12}>
                        <Row>
                            <Col xs={12}>
                                <h2>{nomeCategoria}</h2>
                            </Col>
                            
                                {/*produtos.map(produto =>(
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
                                ))*/}

                                    <Col lg={4} md={4}  sm={6}>              
                                        <Card  className="cardProdutos" >
                                        
                                            <Card.Img 
                                                className="cardProdutosHeader"
                                                src="https://s3.amazonaws.com/storage.wobiz.com/106/106391/images/Large/1525992329_c2728dc12f9f61e5f142e38e778d630a.106391.jpeg" 
                                                 
                                            />
                                            
                                            <Card.Body>
                                                <Card.Title >test</Card.Title>
                                                <Card.Text className="descricao">
                                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar  
                                                </Card.Text>
                                                <Card.Text className="valor" >
                                                    Valor: R$ 120.50
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer className="text-muted">
                                                <Button variant="primary">Solicitar orçamento</Button>
                                            </Card.Footer>
                                        </Card>
                                    </Col>  
                                    <Col lg={4} md={4} sm={6}>              
                                        <Card  className="cardProdutos" >
                                        
                                            <Card.Img variant="top" 
                                                className="cardProdutosHeader"
                                                src="https://s3.amazonaws.com/storage.wobiz.com/106/106391/images/Large/1525992247_c5e0c19b208f901cab9e5598dcd1905d.106391.jpeg" 
                                            
                                            />
                                            
                                            
                                            <Card.Body>
                                                <Card.Title>test</Card.Title>
                                                <Card.Text className="descricao">thararam</Card.Text>
                                                <Card.Text className="valor" >
                                                    Valor: R$ 120.50
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer className="text-muted">
                                                <Button variant="primary">Comprar</Button>
                                            </Card.Footer>
                                        </Card>
                                    </Col>  
                                    <Col lg={4} md={4} sm={6}>
                                        <Card className="cardProdutos">
                                            <Card.Img className="cardProdutosHeader"
                                                 
                                                    src="https://s3.amazonaws.com/storage.wobiz.com/106/106391/images/Large/1525992329_c2728dc12f9f61e5f142e38e778d630a.106391.jpeg" 
                                                     />
                                            
                                            <Card.Body>
                                                <Card.Title>Special title treatment</Card.Title>
                                                <Card.Text className="descricao">
                                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar 
                                                </Card.Text>
                                                <Card.Text className="valor" >
                                                    
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer className="text-muted">
                                                <Button variant="primary">Solicitar orçamento</Button>
                                            </Card.Footer>
                                        </Card>
                                    </Col> 
                                    <Col lg={4} md={4} sm={6}>              
                                        <Card  className="cardProdutos" >
                                        
                                            <Card.Img className="cardProdutosHeader" 
                                                src="https://s3.amazonaws.com/storage.wobiz.com/106/106391/images/Large/1525992247_c5e0c19b208f901cab9e5598dcd1905d.106391.jpeg" 
                                                     />
                                            
                                            <Card.Body>
                                                <Card.Title>test</Card.Title>
                                                <Card.Text className="descricao">thararam</Card.Text>
                                                <Card.Text className="valor" >
                                                    Valor: Solicitar orçamento
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer className="text-muted">
                                                <Button variant="primary">Solicitar orçamento</Button>
                                            </Card.Footer>
                                        </Card>
                                    </Col>  
                                      
                            
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