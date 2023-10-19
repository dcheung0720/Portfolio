import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faAddressCard } from '@fortawesome/free-solid-svg-icons'


function Navigation() {
  return (
    <Navbar bg = "dark" variant='dark' expand="lg" className="bg-body-tertiary">
      <Container >
        <Navbar.Brand href="/Portfolio"><FontAwesomeIcon icon={faCode} /> David Cheung</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Portfolio"> Home</Nav.Link>
            <Nav.Link href="/Portfolio/About">About</Nav.Link>
            <Nav.Link href="#link">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;