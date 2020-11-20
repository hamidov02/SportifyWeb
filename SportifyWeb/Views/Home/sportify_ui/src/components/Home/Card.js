import React from 'react'
import Navbar from '../Navbar/Navbar';

const Card = () => {
    return ( 
        <div>
            <Navbar />
            <br />
            <div className="container">
            <div class="card-deck">
                <div class="card">
                    <img src="https://cdn2.lamag.com/wp-content/uploads/sites/6/2020/09/sofi-stadium-rich-fury-getty-for-hollywood-park-management-company.jpg" class="card-img-top" alt="..."  style={{height: '50%'}}/>
                    <div class="card-body">
                        <h5 class="card-title">Company Name</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Price</li>
                        <li class="list-group-item">icon</li>
                        <li class="list-group-item">Size</li>
                        <li class="list-group-item">Address</li>
                        <li class="list-group-item">Map</li>
                        <div class="card-body">
                            <p class="card-text">Description</p>
                        <li class="list-group-item">User Comments</li>
                        <li class="list-group-item">Rating</li>
                        <li class="list-group-item">20 km away</li>
                        </div>
                    </ul>
                    <div class="card-body">
                        <a href="#" class="btn btn-lg btn-success" style={{margin: '0 20px 0 0'}}>Book</a>
                        <a href="#" class="btn btn-lg btn-success" style={{margin: '0 0 0 20px'}}>Cancel</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
     );
}
 
export default Card;