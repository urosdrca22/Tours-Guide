import React, { useState } from 'react';
import { Card, Button, Badge } from 'react-bootstrap'
import './Tour.css'

const Tour = ({ id, name, info, image, price, removeTour }) => {
    const [readMore, setReadMore] = useState(false);

    return(
        <Card className="text-start mb-3 shadow p-3" style={{ width: '40rem'}}>
            <Card.Img className="tour_image" variant="top" src={image}></Card.Img>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{readMore ? info : `${info.substring(0, 200)}...`}
                <button className="read_more_btn" onClick={() => setReadMore(!readMore)}>
                    {readMore ? 'Show less' : 'Read more'}
                </button>
                </Card.Text>
                <div className="price_badge"><Badge bg="info">Price: ${price}</Badge></div>
                <Button variant="outline-danger" onClick={() => removeTour(id)}>Remove Tour</Button>
            </Card.Body>
        </Card>
    )
};

export default Tour;