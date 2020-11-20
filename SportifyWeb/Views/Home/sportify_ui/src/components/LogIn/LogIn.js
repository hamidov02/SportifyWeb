import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
    return ( 
        <div>
            <Link to="/ownerlogin"><button type="button" className="btn btn-lg btn-outline-success" style={{margin: '20% 150px 0 0'}}>Owner LogIn</button></Link>
            <Link to="/userlogin"><button type="button" className="btn btn-lg btn-outline-success" style={{margin: '20% 150px 0 0'}}>User LogIn</button></Link>
        </div>
     );
}
 
export default LogIn;