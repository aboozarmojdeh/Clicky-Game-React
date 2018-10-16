import React from 'react';
import './Container.css';
import Fruits from '../Fruits';


const Container = props => (
  
  <div
    className='container d-flex flex-wrap justify-content-center'
  >
  {console.log("props:",props.fruits)}
  
    {props.fruits.map((fruit, i) => <Fruits image={fruit} key={i} clickEvent={props.clickEvent}/>)}

    
  </div>


);

export default Container;
