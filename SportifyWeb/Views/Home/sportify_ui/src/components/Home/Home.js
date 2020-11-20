import React, { Component } from 'react';
import {FormControl, Button, InputGroup} from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import HomeCard from './HomeCard';

class Home extends Component {
    // state = {  }
    render() { 
        return ( 
            <div >
                < Navbar />
                <br />
                <h2>Find deals on stadium..</h2>
                <br />
                <div className="container">  
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Which Country ?"
                        aria-label="Which Country ?"
                        aria-describedby="basic-addon2"
                        />
                        <FormControl
                        placeholder="Which City ?"
                        aria-label="Which City ?"
                        aria-describedby="basic-addon2"
                        />
                        <FormControl
                        placeholder="Size"
                        aria-label="Size"
                        aria-describedby="basic-addon2"
                        />
                        <FormControl
                        placeholder="Check in - Check out"
                        aria-label="Check in - Check out"
                        aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                        <Button variant="outline-success">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
                <br />
                <div className="container" >
                    <HomeCard/>
                    <br />
                    <HomeCard/>

                </div>
            </div>
         );
    }
}
 
export default Home;