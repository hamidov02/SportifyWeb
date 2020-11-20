import React from 'react';
import { Link } from 'react-router-dom';

const HomeCard = () => {
    return ( 
        <div>
            <div class="card-deck">
                <div class="card">
                    <img src="https://cdn2.lamag.com/wp-content/uploads/sites/6/2020/09/sofi-stadium-rich-fury-getty-for-hollywood-park-management-company.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Company Name</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Price</li>
                        <li class="list-group-item">icon</li>
                        <li class="list-group-item">20 km away</li>
                        <li class="list-group-item">Rating</li>
                    </ul>
                    <div class="card-body">
                        <Link to="/more"><button class="btn btn-success" style={{margin: '0 20px 0 0'}}>More</button></Link>
                        <Link to="/book"><button class="btn btn-success" style={{margin: '0 0 0 20px'}}>Book</button></Link>
                    </div>
                </div>
                <div class="card">
                    <img src="https://cdn2.lamag.com/wp-content/uploads/sites/6/2020/09/sofi-stadium-rich-fury-getty-for-hollywood-park-management-company.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Company Name</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Price</li>
                        <li class="list-group-item">icon</li>
                        <li class="list-group-item">20 km away</li>
                        <li class="list-group-item">Rating</li>
                    </ul>
                    <div class="card-body">
                        <Link to="/more"><button class="btn btn-success" style={{margin: '0 20px 0 0'}}>More</button></Link>
                        <Link to="/book"><button class="btn btn-success" style={{margin: '0 0 0 20px'}}>Book</button></Link>
                    </div>
                </div>
                <div class="card">
                    <img src="https://cdn2.lamag.com/wp-content/uploads/sites/6/2020/09/sofi-stadium-rich-fury-getty-for-hollywood-park-management-company.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Company Name</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Price</li>
                        <li class="list-group-item">icon</li>
                        <li class="list-group-item">20 km away</li>
                        <li class="list-group-item">Rating</li>
                    </ul>
                    <div class="card-body">
                        <Link to="/more"><button class="btn btn-success" style={{margin: '0 20px 0 0'}}>More</button></Link>
                        <Link to="/book"><button class="btn btn-success" style={{margin: '0 0 0 20px'}}>Book</button></Link>
                    </div>
                </div>
                </div>
        </div>
     );
}
 
export default HomeCard;