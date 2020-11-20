import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Nav, Link} from 'react-bootstrap';

const Owner = () => {
    return ( 
        <div>
            <Navbar />
            <br />
            <div style={{float: 'left', margin: 'auto', padding: '0 0 0 16%', fontSize: '1.5em'}}>
            <Nav defaultActiveKey="/home" className="flex-column text-justify">
                <Nav.Link href="/home" disabled>Update</Nav.Link>
                <Nav.Link className="text-success " eventKey="link-1">Info</Nav.Link>
                <Nav.Link className="text-success" eventKey="link-2">Security</Nav.Link>
                <Nav.Link className="text-success" eventKey="link-2">Order History</Nav.Link>
                <Nav.Link className="text-success" eventKey="link-2">My Stadiums</Nav.Link>
                <Nav.Link className="text-success" eventKey="link-2">Add new stadium</Nav.Link>
            </Nav>
            </div>
            
        </div>
     );
}
 
export default Owner;