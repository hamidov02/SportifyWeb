import React from 'react';
import { Link } from 'react-router-dom';

const MainLogIn = () => {
    return ( 
        <div className="container">
            <h1 style={{padding: '6% 0' , color: 'green'}}>Log In</h1>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <div >
                    <button style={{margin: '30px 100px 0 0'}} type="submit" className="btn btn-lg btn-outline-success" >Log In</button>
                    <Link to="/signup"><button style={{margin: '30px 0 0 0'}} type="submit" className="btn btn-lg btn-outline-success" >Sign Up</button></Link>
                </div>
            </form>
        </div>
     );
}
 
export default MainLogIn;