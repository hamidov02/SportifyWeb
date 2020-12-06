import React, { Component } from 'react';
import {FormControl,  InputGroup} from 'react-bootstrap';

import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';

import { Link } from 'react-router-dom';
    
    function RenderMenuItem ({stadium}) {
        return (
            <div className="menuItem">
            <Card>
              <CardImg top width="100%" height='250px' src={stadium.image} alt={stadium.stadium_name} />
              <CardBody>
                <CardTitle tag="h5">{stadium.stadium_name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{stadium.company_name}</CardSubtitle>
                <CardText>{stadium.description}</CardText>
                <CardText>Type of sport: {stadium.sport_type}</CardText>
                <CardText>Price: {stadium.price} $</CardText>
                <CardText>Rating: {stadium.rating}</CardText>
                <div >
                    <Button className="cardbutton" size="lg"><Link to={`/home/${stadium.id}`} className="cardl">More</Link></Button>
                    <Button size="lg"><Link to={`/home/${stadium.id}`} className="cardl">Book</Link></Button>
                </div>
              </CardBody>
            </Card>
          </div>
        );
    }    
    
    const Menu = (props) => {
        const menu = props.dishes.map((stadium) => {
            return (
              <div key={stadium.id}  className="col-12 col-md-5 m-1">
                <RenderMenuItem stadium={stadium} />
              </div>
            );
        });     

        return (
            <div className="container">
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
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }

export default Menu;

                       