import React from 'react';
import './Navbar.css';

const Navbar = props => (
  <div className="navbar ">
    <div>Clicky Game</div>
    <div className="messageTop">{props.messageTop}</div>
    <div>

    {console.log("score:",props)}
      Score:  {props.score} <span className="scoreSpace">|</span> High Score: {props.highScore} 

      
    </div>
  </div>
);

export default Navbar;
