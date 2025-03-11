import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import './style.css'
import user from '../Image/user.png'

function navbar() {
  return (
    <Navbar expand="lg" className="bg-secondary">
      <Container>
        <Navbar.Brand href="#home">  
           <img
              src="/Image/logo.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="/" style={{color: "black"}}>Home</Nav.Link>
            <Nav.Link href="/uploadVideos" style={{color: "black"}}>Upload Videos </Nav.Link>
           
          </Nav>

          <Form className="d-flex">
          <Nav.Link href="/Register" className="me-2" style={{color: "black"}}> 
          <img src={user} alt='' style={{height: "15px", marginInline: '5px'}}/>
          
          Login </Nav.Link>
          </Form>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;