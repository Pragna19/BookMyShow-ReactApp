import  Container  from "react-bootstrap/Container";
import Row  from "react-bootstrap/Row";
import  Col  from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Footer() {
  return (
    <div class="foot" style={{background:'#494848',color:'#B4B4B4'}}>
      <Container fluid>
        <Row style={{padding:'1%',marginTop:'5%',color:'white'}}>
            <Col xs={2}>
              List your show
            </Col>
            <Col xs={4}>
              Got a show, event, activity or a great experience? Partner with us & get listed on BookMyShow
            </Col>
            <Col xs={6} style={{display:'flex',flexDirection:'row-reverse'}}>
              <Button style={{background:'rgb(236,94,119'}}>Contact today!</Button>
            </Col>
        </Row>
        <Row style={{textAlign:'center',padding:'3%'}}>
            <Col>
                24/7 CUSTOMER CARE
            </Col>
            <Col>
                RESEND BOOKING CONFIRMATION
            </Col>
            <Col>
                SUBSCRIBE TO THE NEWSELLER
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
