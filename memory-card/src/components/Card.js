import React, { useState } from 'react';
import '../styles/Card.css';

function Card(props) {
  return (
    <div className="Card">
   <img src={'/images/'+props.cardInfo.name+'.jpeg'} alt="image"/>
    </div>
  );
}

export default Card;