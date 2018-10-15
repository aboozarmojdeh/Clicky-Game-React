import React from 'react';
import './Fruits.css';

// the onClick function is defined as a callback so that the clicked elements value
// can be passed to props.clickEvent to check if the image has been clicked or not
const Fruits = props => (
  <div className="card" >
    <img className="card-img-top card-height" src={props.image} alt="" />
  </div>
);

export default Fruits;
