//client/src/components/Card/Card.jsx
import React from 'react';
import "./Card.css"

const Card = ({ image, name, types, id }) => {
  return (
    <div className='card' key={id}>
      <div>
        <h2>{name}</h2>
        
      </div>
      <div>
        <img src={image} alt={name} />
        <div>
          {types.map((e, index) => (
            <p key={index}>{e}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;