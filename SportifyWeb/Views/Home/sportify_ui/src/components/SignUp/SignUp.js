import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return ( 
        <div>
            <Link to="/signuptoowner">        
                <button type="button" className="btn btn-lg btn-outline-success" style={{margin: '20% 150px 0 0'}}>Sign up to owner</button>
            </Link>
            <Link to="/signuptouser">
                <button type="button" className="btn btn-lg btn-outline-success" style={{margin: '20% 150px 0 0'}}>Sign up to user</button>
            </Link>
        </div>
     );
}
 
export default SignUp;