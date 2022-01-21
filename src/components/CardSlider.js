import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { CardGroup, Container } from "react-bootstrap";

function CardSlider() {
    return (
      <div style={{margin:'0%',padding:'0%'}}>
        <Container fluid style={{backgroundColor:'#f3efe5'}}>
            <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/lead-in-v3-collection-202102040828.png" style={{width:'75%',marginLeft:'15%',marginTop:'5%'}}></img>
            <Carousel indicators={false} style={{margin:'15px',padding:'3%'}}>
                <Carousel.Item>
                    <CardGroup style={{gap:'2%'}}>
                        <Card style={{backgroundColor:'#f3efe5',color:'white'}}>
                            <Card.Img variant="top" src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/esports-collection-202011150107.png" />
                        </Card>
                        <Card style={{backgroundColor:'#f3efe5',color:'white'}}>
                            <Card.Img variant="top" src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/art-and-crafts-collection-202007220710.png" />
                        </Card>
                        <Card style={{backgroundColor:'#f3efe5',color:'white'}}>
                            <Card.Img variant="top" src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/self-improvement-collection-202007220710.png" />
                        </Card>
                        <Card style={{backgroundColor:'#f3efe5',color:'white'}}>
                            <Card.Img variant="top" src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/interactive-games-collection-202012041129.png" />
                        </Card>
                    </CardGroup>
                </Carousel.Item>
                <Carousel.Item>
                <CardGroup style={{gap:'2%'}}>
                        <Card style={{backgroundColor:'#f3efe5',color:'white'}}>
                            <Card.Img variant="top" src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/food-n-drinks-collection-202010061250.png" />
                        </Card>
                        <Card style={{backgroundColor:'#f3efe5',color:'white'}}>
                            <Card.Img variant="top" src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/music-shows-collection-202007220710.png" />
                        </Card>
                        <Card style={{backgroundColor:'#f3efe5',color:'white'}}>
                            <Card.Img variant="top" src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/adventure-collection-202010140844.png" />
                        </Card>
                        <Card style={{backgroundColor:'#f3efe5',color:'white'}}>
                            <Card.Img variant="top" src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/theatre-shows-collection-202012041128.png" />
                        </Card>
                    </CardGroup>
                </Carousel.Item>
                <Carousel.Item>
                      <CardGroup style={{gap:'2%'}}>
                        <Card style={{backgroundColor:'#f3efe5',color:'white'}}>
                            <Card.Img variant="top" src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTE1KyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png" />
                        </Card>
                        <Card style={{backgroundColor:'#f3efe5',color:'white'}}>
                            <Card.Img variant="top" src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/fitness-collection-2020081150.png" />
                        </Card>
                        <Card style={{backgroundColor:'#f3efe5',color:'white'}}>
                            <Card.Img variant="top" src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/kids-collection-202007220710.png" />
                        </Card>
                        <Card style={{backgroundColor:'#f3efe5',color:'white'}}>
                            <Card.Img variant="top" src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NDArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/comedy-shows-collection-202007220710.png" />
                        </Card>
                    </CardGroup>
                </Carousel.Item>    
            </Carousel>
        </Container>
        
      </div>
    );
  }
  
export default CardSlider;
  