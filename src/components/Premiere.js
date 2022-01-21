import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { CardGroup, Container } from "react-bootstrap";

function Premiere() {
    return (
      <div style={{margin:'0%',padding:'0%'}}>
        <Container fluid style={{backgroundColor:'rgb(43,49,72'}}>
            <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" style={{width:'75%',marginLeft:'15%',marginTop:'3%',marginBottom:'3%'}}></img>
            <h2 style={{color:'white',marginInlineStart:'5%'}}>Premieres</h2>
            <h7 style={{color:'white',marginInlineStart:'5%'}}>Brand new releases every Friday</h7>
            <Carousel indicators={false} style={{margin:'15px',padding:'3%'}}>
                <Carousel.Item style={{backgroundColor:'rgb(43,49,72'}}>
                    <CardGroup style={{gap:'2%'}}>
                        <Card style={{backgroundColor:'rgb(43,49,72',color:'white'}}>
                            <Card.Img variant="top" src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00056556-zftjbeevvq-portrait.jpg" />
                            <Card.Body >
                            <Card.Title>Fast and Furious 9</Card.Title>
                            <Card.Text>
                                English
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{backgroundColor:'rgb(43,49,72',color:'white'}}>
                            <Card.Img variant="top" src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00316067-yczymellxu-portrait.jpg" />
                            <Card.Body>
                            <Card.Title>The Investigation</Card.Title>
                            <Card.Text>
                                Danish
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{backgroundColor:'rgb(43,49,72',color:'white'}}>
                            <Card.Img variant="top" src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00311532-cwljgktdka-portrait.jpg" />
                            <Card.Body>
                            <Card.Title>Shadow in the cloud</Card.Title>
                            <Card.Text>
                                English
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Carousel.Item>
                <Carousel.Item>
                <CardGroup style={{gap:'2%'}}>
                        <Card style={{backgroundColor:'rgb(43,49,72',color:'white'}}>
                            <Card.Img variant="top" src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00122532-yecplrayap-portrait.jpg" />
                            <Card.Body>
                            <Card.Title>Venom:Let there be carnage</Card.Title>
                            <Card.Text>
                                English
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{backgroundColor:'rgb(43,49,72',color:'white'}}>
                            <Card.Img variant="top" src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00301313-skcpmzlrdd-portrait.jpg" />
                            <Card.Body>
                            <Card.Title>The Boss Baby: Family Business</Card.Title>
                            <Card.Text>
                                English
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{backgroundColor:'rgb(43,49,72',color:'white'}}>
                            <Card.Img variant="top" src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00301320-yqfsqracrx-portrait.jpg" />
                            <Card.Body>
                            <Card.Title>Never Rarely Somtimes Always</Card.Title>
                            <Card.Text>
                                English
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Carousel.Item>
                <Carousel.Item>
                <CardGroup style={{gap:'2%'}}>
                        <Card style={{backgroundColor:'rgb(43,49,72',color:'white'}}>
                            <Card.Img variant="top" src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00316141-rjzekmrrgj-portrait.jpg" />
                            <Card.Body>
                            <Card.Title>The Sister: Season 1</Card.Title>
                            <Card.Text>
                                English
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{backgroundColor:'rgb(43,49,72',color:'white'}}>
                            <Card.Img variant="top" src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00124579-dkumwazszz-portrait.jpg" />
                            <Card.Body>
                            <Card.Title>Ordinary LOve</Card.Title>
                            <Card.Text>
                                English
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{backgroundColor:'rgb(43,49,72',color:'white'}}>
                            <Card.Img variant="top" src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00301320-yqfsqracrx-portrait.jpg" />
                            <Card.Body>
                            <Card.Title>Never Rarely Somtimes Always</Card.Title>
                            <Card.Text>
                                English
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Carousel.Item>    
            </Carousel>
        </Container>
        
      </div>
    );
  }
  
export default Premiere;