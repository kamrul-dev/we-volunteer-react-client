import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../logos/we-volunteer.png';
import Loading from '../Loading/Loading';
import './NavBar.css';
const NavBar = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    console.log(user)

    if (loading) {
        return <Loading></Loading>
    }
    const handleSignOut = () => {
        signOut(auth);
        navigate('/');
        
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container className='nav-itmes'>
                    <Navbar.Brand>
                        <Link to='/'><img className='w-50' src={logo} alt="" /></Link>
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
                            {
                                user ? <div className='d-flex align-items-center'><Button onClick={() => handleSignOut(auth)} className="btn btn-warning">SignOut</Button> </div> : <NavLink className='text-dark fw-bold' to="/login">
                                    Login
                                </NavLink>
                            }
                            {
                                user?.displayName
                            }
                            <NavLink className='text-dark fw-bold' to="/volunteerregister">
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