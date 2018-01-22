import React from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

const person = (props) => {
  return (
    <Aux>
      <p onClick={props.click}>Im {props.name} and I am {props.age} years old!!!!</p>
      <div>{props.children}</div>
      <input type="text" onChange={props.changed} value={props.name} />
    </Aux>
  )
};

export default withClass(person, classes.Person);