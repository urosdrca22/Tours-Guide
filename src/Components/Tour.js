import React from 'react';
import { Card, Button } from 'react-bootstrap'
import './Tour.css'

const Tour = ({ id, name, info, image, price }) => {
    return(
        <Card className="text-center mb-3 shadow p-3" style={{ width: '40rem'}}>
            <Card.Img className="tour_image" src={image}></Card.Img>
            <Card.Body>
                <Card.Header as="h5">{name}</Card.Header>
                <Card.Text>{info}</Card.Text>
                <Card.Text>${price}</Card.Text>
                <Button>Remove Tour</Button>
            </Card.Body>
        </Card>
    )
};

export default Tour;