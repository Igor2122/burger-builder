import React from 'react';
import Radium from 'radium';
import './Person.css'

import './Person';

const person = (props) => {
   const style = {
      '@media (min-width: 500px)': {
         width: '200px',
         backgroundColor: 'salmon'
      }
   }

   return (
      <div className="Person" style={style}>
         <p 
         onClick={props.click} 
         >#:{props.id} I'am {props.name} and I am {props.age} years old!</p>
         <p>{props.children}</p>
         <input type="text" onChange={props.changed} value={props.name}></input>
      </div>
   )
}

export default Radium(person);