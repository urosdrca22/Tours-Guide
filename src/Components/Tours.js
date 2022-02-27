import React from "react";
import Tour from './Tour'
import { Container } from "react-bootstrap";
import './Tours.css';

const Tours = ({ tours, removeTour}) => {
    return (
            <Container className="tours_container">
                        <h1>Our Tours</h1>
                        <div className="underline"></div>
                        {tours.map((tour) => {
                            return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
                        })}
            </Container>
    );
};

export default Tours;