import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../../src/img/resturent-logo.png'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                   <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                        <Nav.Link className='text-dark' href="#login">Login</Nav.Link>
                        <Nav.Link className='text-dark' href="#register">Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;