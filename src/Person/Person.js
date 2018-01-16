import React from 'react';
import './Person.css';
//import Radium from 'radium';

const person = (props) => {
  /*const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  };*/

  return (
    <div className="Person" /*style={style}*/>>
      <p onClick={props.click}>Im {props.name} and I am {props.age} years old!!!!</p>
      <div>{props.children}</div>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
};

//export default Radium(person);
export default person;