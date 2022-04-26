import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../logos/we-volunteer.png';
import './NavBar.css';
const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container className='nav-itmes'>
                    <Navbar.Brand>
                        <img className='w-50' src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <NavLink className='text-dark fw-bold' to="/home">Home</NavLink>
                            <NavLink className='text-dark fw-bold' to="/donation">
                                Donation
                            </NavLink>
                            <NavLink className='text-dark fw-bold' to="/events">
                                Events
                            </NavLink>
                            <NavLink className='text-dark fw-bold' to="/blogs">
                                Blog
                            </NavLink>
                            <NavLink className='text-dark fw-bold' to="/register">
                                <Button>Register as Voluteer</Button>
                            </NavLink>
                            <NavLink className='text-dark fw-bold' to="/admin">
                                <Button>Admin</Button>
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;