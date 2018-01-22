import React from 'react';
import './UserOutput.css';

const useroutput = (props) => {
  return (
    <div className="UserOutput">
      <p onClick={props.click}>My name is {props.username} and I like to walk dogs.</p>
      <p>{props.p2}</p>
    </div>
  )
};

export default useroutput;
