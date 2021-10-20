import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import { LoadingComponent } from '../LoadingComponent/LoadingComponent';

import './LocationSelection.css';

export const LocationSelection = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [error, setError] = useState('');

  const getLocation = (position) => {
    console.log(position);
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  const catchError = () => {
    setError('Sorry, no position available.');
    console.log(error);
  };

  const handleClick = () => {
    navigator.geolocation.getCurrentPosition(getLocation, catchError);
  };

  return (
    <>
      {error && <p>{error}</p>}
      {!error && (
        <div className="location-selection">
          <h4>Click The Button To Get Stories Near You</h4>

          <button
            className="get-stories-btn"
            type="click"
            onClick={(e) => handleClick(e)}
          >
            Get Stories
          </button>
        </div>
      )}
    </>
  );
};
