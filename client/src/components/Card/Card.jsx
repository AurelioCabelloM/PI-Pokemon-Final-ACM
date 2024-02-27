//client/src/components/Card/Card.jsx
import React from 'react';

const Card = ({ image, name, types, attack, hp, id }) => {
  return (
    <div key={id}>
      <div>
        <h2>{name}</h2>
        <h5>Hp: {hp}</h5>
        <h5>Attack: {attack}</h5>
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