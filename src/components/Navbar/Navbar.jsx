import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar-style.css'

export default function NavbarF() {
  return (
    <Navbar fixed='top' sticky='top' expand="lg" className='Nav'>
      <Container className='contain'>
        <Navbar.Brand href="#home">
            <img src="/public/logo.png" alt="logo Geek Store" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <h1>
                Geek Store
            </h1>
          <Nav className="me-auto">
            <Nav.Link href="#hero">Hero</Nav.Link>
            <Nav.Link href="#universo-geek">Universo Geek</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
