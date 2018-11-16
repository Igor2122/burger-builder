import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {id: 1, name: 'Igor', age: 32},
      {id: 2, name: 'Reeem', age: 26},
      {id: 3, name: 'Stephanie', age: 28},
    ],
      showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // traditional
    // const persons = this.state.persons.slice();//copies the full array and returns & returns a new which is stored here
    // or spread operator: 
    const persons = [...this.state.persons]; // new array from the old array objects
    persons.splice(personIndex, 1);// removes 1 element from the array
    this.setState({persons: persons}) // we set it back with removed element
    console.log(personIndex);
  }
  


  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;// does show is bool false
    this.setState({showPersons: !doesShow});// assign opposite to the above to toggle
  }

  nameChangedHandler = (event, id) => {
    // find the person we updating 
    const personIndex = this.state.persons.findIndex(
      prsn => {
        return prsn.id === id;//True/False compare to the id we got from the method on the button
      }
    );// as map() will execute on evety element of the array
    const person = {
      ...this.state.persons[personIndex]
    }// we are getting the id of the person we have found 

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }  

  render() {

    let peronas = null;
    let buttonClass = ' ';

    if(this.state.showPersons){
      peronas = (
        <div>
        {this.state.persons.map((person, index) => {
        // convert this array to valid jsx & reder the array with map()
        // will exc a method on the given arr
           return <Person 
                  id={person.id}
                  name={person.name}
                  age={person.age}
                  click={() => this.deletePersonHandler(index)} 
                  key={person.id}
                  changed={(event) => this.nameChangedHandler(event,person.id)}/> // return jsx
        })} 
          <h1>Hi I am a React App</h1>
          <p>This is really working</p>
          {/* <button   
          onClick={this.switchNameHandler.bind(this, 'Igorka')}>Switch Name</button> */}
          </div>
      );
      buttonClass = classes.Red;
    }

    let assignedClasses = [];
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red); // assignedClasses will be red
    } 
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold); // assignedClasses: red, bold
    }
    

    return (
        <div className={classes.App}>
        {/* we have to pass join() as we need space between classes  */}
        <h2 className={assignedClasses.join(' ')}>This is really wroking!</h2>
          <button 
          className={buttonClass}
          onClick={this.togglePersonHandler}>Toggle View</button>
          
          {peronas}
        </div>
    );
  }
}

export default App;// higher order component 
