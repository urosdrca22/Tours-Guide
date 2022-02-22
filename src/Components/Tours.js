import React from "react";
import Tour from './Tour'
import { Container, Row, Col } from "react-bootstrap";
import './Tours.css';

const Tours = ({ tours }) => {
    return (
            <Container className="tours_container">
                        <h1>Our Tours</h1>
                        {tours.map((tour) => {
                            return <Tour key={tour.id} {...tour}></Tour>
                        })}
            </Container>
    );
};

export default Tours;