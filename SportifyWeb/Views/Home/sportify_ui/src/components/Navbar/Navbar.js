import React from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbars = () => {
    return ( 
        <Navbar bg="dark" variant="dark">
                    <div className="container">
                        <Link to="/"><Navbar.Brand href="#home" style={{color: 'lightGreen', fontSize: '30px'}}>Sport.com</Navbar.Brand></Link>
                        <Nav className="mr-auto">
                        <Link to="/"><Nav.Link href="#home">Home</Nav.Link></Link>
                        <Nav.Link >Currency</Nav.Link>
                        <Nav.Link >Language</Nav.Link>
                        <Nav.Link >About</Nav.Link>
                        <Link to="/user"><p className="btn-dark text-dark">1</p></Link>
                        <Link to="/owner"><p className="btn-dark text-dark">2</p></Link>
                        </Nav>
                        <Form inline>
                        <Link to="/login"><Button variant="success" style={{margin: '0 20px 0 0 '}}>Log In</Button></Link>
                        <Link to="/signup"><Button variant="success">Sign Up</Button></Link>
                        </Form>
                    </div>  
        </Navbar>
     );
}
 
export default Navbars;