import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../logos/we-volunteer.png'
const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img className='w-50' src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='text-dark fw-bold' href="#features">Features</Nav.Link>
                            <Nav.Link className='text-dark fw-bold' href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link className='text-dark fw-bold' href="#deets">Home</Nav.Link>
                            <Nav.Link className='text-dark fw-bold' href="#memes">
                                Donation
                            </Nav.Link>
                            <Nav.Link className='text-dark fw-bold' href="#memes">
                                Events
                            </Nav.Link>
                            <Nav.Link className='text-dark fw-bold' href="#memes">
                                Blog
                            </Nav.Link>
                            <Nav.Link className='text-dark fw-bold' href="#memes">
                                <Button>Register</Button>
                            </Nav.Link>
                            <Nav.Link className='text-dark fw-bold' href="#memes">
                                <Button>Admin</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;