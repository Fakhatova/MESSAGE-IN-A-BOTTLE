import './Directions.css';
import React, { useState, useEffect } from 'react';
import { getDirections } from '../../apiCalls';

const Directions = ({ id, latitude, longitude }) => {
  const [directions, setDirections] = useState([]);
  const [error, setError] = useState('');
  // console.log(directions);

  const getStoryDirections = () => {
    getDirections(id, latitude, longitude)
      .then((data) => console.log(data.data))
      // .then((data) => setDirections(data.data.attributes))
      .catch((error) => setError(error));
  };

  useEffect(() => {
    getStoryDirections();
  }, []);

  return (
    <article className="directions">
      {/* <h3>Directions</h3>
      <p>Distance {distance}</p>
      <p>{narrative}</p>
      <button>BACK TO CARD</button> */}
    </article>
  );
};

export default Directions;
