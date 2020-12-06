import React, { Component } from 'react';
// import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Media } from 'reactstrap';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody, Breadcrumb, BreadcrumbItem
  } from 'reactstrap';
import { Link } from 'react-router-dom';

    function RenderDish({stadium}) {
        return(
            <div className="col-12">
                <Card style={{width: '600px'}}>
                    <CardImg top width="100%" src={stadium.image} alt={stadium.name}></CardImg>
                    {/* <CardBody>
                        <CardTitle>{stadium.name}</CardTitle>
                        <CardText>{stadium.description}</CardText>
                    </CardBody>
                </Card> */}
                <CardGroup>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Stadium Name: {stadium.stadium_name}</CardTitle>
          <CardTitle tag="h6" className="mb-2">Company Name: {stadium.company_name}</CardTitle>
          <CardTitle tag="h6" className="mb-2">Type of sport: {stadium.sport_type}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Area: {stadium.area}</CardSubtitle>
          {/* <CardSubtitle tag="h6" className="mb-2">Address:  {stadium.adress.city}</CardSubtitle> */}
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle tag="h6" className="mb-2">About:</CardTitle>
          <CardText>{stadium.description}</CardText>
          <Button size="lg" className="cardl">Book</Button>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Price: {stadium.price}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2">Number of spectator: {stadium.number_of_spectator}</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2">Number of player: {stadium.number_of_player}</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2"> {stadium.x}</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2"> {stadium.y}</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2">Number of player: {stadium.number_of_player}</CardSubtitle>
        </CardBody>
      </Card>
    </CardGroup>
    </Card>
            </div>
        );
    }

    const StadiumDetail = (props) => {
        if (props.stadium != null)
            return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home" style={{color: 'lightgreen', fontWeight: 'bold'}}>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.stadium.stadium_name} - {props.stadium.company_name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.stadium.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish stadium={props.stadium} />
                    </div>
                </div>
                </div>
            );
            else 
                return (
                    <div></div>
                );
    }
 
export default StadiumDetail;