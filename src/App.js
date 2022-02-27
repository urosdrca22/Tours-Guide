import React, { useState, useEffect } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tours from './Components/Tours.js'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours)
  };

  const FetchTours = async() => {
    const response = await fetch(url);
    const tours = await response.json();
    setTours(tours);
  };

  useEffect(() => {
    FetchTours()
  }, []);

  return (
        <Tours tours={tours} removeTour={removeTour} ></Tours>
  );
}

export default App;
