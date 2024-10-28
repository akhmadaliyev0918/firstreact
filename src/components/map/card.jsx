import React from 'react';
import './style.css';

const Card = ({ ism, familiya, yoshi, fakultet, manzil, telefon }) => {
  return (
    <div className="Card-box">
      <h2 className="Card-header">{ism} {familiya}</h2>
      <br />
      <b>{yoshi}</b>
      <p>{fakultet}</p>
      <i>{telefon}</i>
      <i>{manzil}</i>
    </div>
  );
}

export default Card;
