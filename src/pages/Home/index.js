import React from 'react';
import { Container, Carousel, Col, Card, Button, Row } from 'react-bootstrap';

import back from '../../assets/background.jpeg';

export default function Home(){
    return (
        <> 
            <div className="container-fluid px-0 d-none d-md-block">
                <Carousel>
                    <Carousel.Item>
                            <div>
                                <img
                                    className="d-block w-100 rounded"
                                    src={require('../../assets/background.jpeg')}
                                    alt="First slide"
                                />
                            </div>
                            
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 rounded"
                            src={require('../../assets/background.jpeg')}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 rounded"
                            src={require('../../assets/background.jpeg')}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            
            <Container>
                <h1 className="my-3">Destaques</h1> 
                <Row>

                
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
                </Row>
            </Container>

            
        </>
    );
}