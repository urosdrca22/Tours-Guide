import React, { useState, useEffect } from 'react'
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tours from './Components/Tours.js'
import { Container } from 'react-bootstrap';

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [tours, setTours] = useState([]);

  const FetchTours = async() => {
    const response = await fetch(url);
    const tours = await response.json();
    setTours(tours);
  };

  useEffect(() => {
    FetchTours()
  }, []);

  return (
        <Tours tours={tours}></Tours>
  );
}

export default App;
