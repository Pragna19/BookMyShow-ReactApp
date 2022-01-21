import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import axios from "axios"
import { useEffect, useState } from "react";

function AllMovies() {
    const [data,setData] = useState([]);
    var mov

    useEffect(async()=> {
        try {
            const response = await axios.get('http://localhost:5000/movies');
            console.log(response);
            setData(response.data);
          } catch (error) {
            console.error(error);
          }
    }, []);

    return (
        <div>
            <Container style={{padding:'5%',background:'#f3efe5'}}>
                <Row style={{textAlign:'center'}}>
                    {data.map((mov) =>
                        <Col id={mov._id} key={mov._id} xs={6} md={4} lg={3} style={{marginBlockStart:'2%'}}>
                        <Card style={{cursor:"pointer"}} onClick={()=> window.location.href="/movie/"+ mov._id }>
                                <Card.Img variant="top" src={mov.imageURL} />
                                <Card.Body >
                                <Card.Title>{mov.title}</Card.Title>
                                <Card.Text>
                                    {mov.language}
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    );
  }
  
  export default AllMovies;