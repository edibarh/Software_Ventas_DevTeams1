import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';



function NavBarLandingPage(){
    return(
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">
            <img alt="SurtimaxLogo" src="https://www.america-retail.com/static//2019/03/Surtimax.png" width="100" height="40"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        <Navbar.Collapse className="justify-content-end">
            <Nav.Link eventKey={2} href="#memes">
                Login
            </Nav.Link>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    );
}

export {NavBarLandingPage};