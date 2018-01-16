import React, { Component } from 'react';
import './App.css';
//import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'sdfsd', name: 'Kyle', age: 28 },
      { id: 'ssaa', name: 'John', age: 14 },
      { id: 'ffa', name: 'Stephanie', age: 26 }
    ],
    usernames: [
      { name: 'Brian' }
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  /**/
  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      /*':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      //}*/
    }

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return(
              <Person
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangedHandler(event, person.id)}
                name={person.name}
                age={person.age}
                key={person.id} />
            );
          })}
        </div>
      );

      style.backgroundColor = 'red';
      /*style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }*/
    }

    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
      //<StyleRoot>
        <div className="App">
          <h1>Hi, Im a React App</h1>
          <p className={classes.join(' ')}>This is really working</p>
          <button
            style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
      //</StyleRoot>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, Im react!!!!'));
  }


  /* Assignment 1
  render() {
    return (
      <div className="App">
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>

        <UserInput
          changed={this.switchUserNameHandler}
          currentName={this.state.usernames[0].name} />

        <UserOutput
          username={this.state.usernames[0].name }
          p2="I don't like to pick up their poop."
          click={this.changeUsernameHandler} />
        <UserOutput
          p2="I don't like the homework they assign." />
      </div>
    );
  }
   */
}

//export default Radium(App);
export default App;