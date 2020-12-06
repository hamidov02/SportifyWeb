import React from 'react';
import { Nav, Link} from 'react-bootstrap';

const User = () => {
    return ( 
        <div>
            <br />
            <div style={{float: 'left', margin: 'auto', padding: '0 0 0 16%', fontSize: '1.5em'}}>
            <Nav defaultActiveKey="/home" className="flex-column text-justify">
                <Nav.Link href="/home" disabled>Update</Nav.Link>
                <Nav.Link className="text-success " eventKey="link-1">Personal Details</Nav.Link>
                <Nav.Link className="text-success" eventKey="link-2">Change Password</Nav.Link>
                <Nav.Link className="text-success" eventKey="link-2">Reviews</Nav.Link>
                <Nav.Link className="text-success" eventKey="link-2">Booking History</Nav.Link>
                <Nav.Link className="text-success" eventKey="link-2">Upcoming History</Nav.Link>
                <Nav.Link className="text-success" eventKey="link-2">Payment History</Nav.Link>
                <Nav.Link className="text-success" eventKey="link-2">Saved Cards</Nav.Link>
            </Nav>
            </div>
            
        </div>
     );
}
 
export default User;