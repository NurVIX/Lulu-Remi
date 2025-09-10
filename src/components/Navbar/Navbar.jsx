import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css'; 
import { Link } from 'react-router-dom';

import Logo from "../../assets/Logo.png";

function TextLinkExample() {
  return (
    <Navbar className="NavbarContainer ">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="NavbarLogoContainer" >
        <img src={Logo} alt="Lulu Remi Logo" className="NavbarLogo"/>
        </Navbar.Brand>
        <Navbar className='caveat-brush-regular' >
          <Navbar.Brand className ="NavbarFont" as={Link} to="/contact">Contact</Navbar.Brand>
          <Navbar.Brand className = "NavbarFont" href="#home">About</Navbar.Brand>
        </Navbar>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className='IconsContainer'>
            <Nav.Link href="#home"><i className="bi bi-person-fill NavIcon"></i></Nav.Link>
            <Nav.Link href="#cart"><i className="bi bi-cart NavIcon"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;