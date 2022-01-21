import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <div>
        <Navbar bg="light" expand="lg" bg="dark" variant="dark" style={{backgroundColor:"#1167b1"}}>
            <Container>
                <Navbar.Brand href="#">book<strong style={{backgroundColor:"red"}}>my</strong>show</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="/register">User registration</Nav.Link>
                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="">All movies</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                        Something else here
                        </NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
            </Navbar>
              <Navbar bg="dark" variant="dark">
                  <Container>
                          <Nav className="me-auto">
                              <Nav.Link href="/movies">Movies</Nav.Link>
                              <Nav.Link href="#features">Stream</Nav.Link>
                              <Nav.Link href="#pricing">Events</Nav.Link>
                              <Nav.Link href="#home">Plays</Nav.Link>
                              <Nav.Link href="#home">Sports</Nav.Link>
                              <Nav.Link href="#home">Activities</Nav.Link>
                              <Nav.Link href="#home">Buzz</Nav.Link>
                          </Nav>
                  </Container>
              </Navbar>
    </div>
  );
}

export default Header;