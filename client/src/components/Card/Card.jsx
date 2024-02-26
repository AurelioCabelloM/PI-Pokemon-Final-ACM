// client/src/components/Card/Card.jsx
import React from 'react';

const Card = ({ name, id}) => (
  <div className="card-container">
    <h2>Name: {name}</h2>
    <p>id: {id} </p>
  </div>
);

export default Card;