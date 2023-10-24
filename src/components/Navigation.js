import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faHouse, faPhone, faFolder, faUser } from '@fortawesome/free-solid-svg-icons'


function Navigation() {
  return (
    <Navbar bg = "dark" variant='dark' expand="lg" className="bg-body-tertiary">
      <Container >
        <Navbar.Brand href="#/"><FontAwesomeIcon icon={faCode} /> David Cheung</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#/"> <FontAwesomeIcon icon={faHouse} /> Home</Nav.Link>
            <Nav.Link href="#/About"><FontAwesomeIcon icon={faUser} /> About </Nav.Link>
            <Nav.Link href="#/Projects"><FontAwesomeIcon icon={faFolder} /> Projects</Nav.Link>
            <Nav.Link href="#/ContactMe"> <FontAwesomeIcon icon={faPhone} /> Contact </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;