import React from 'react';
import Button from '../../UI/Button/Button';
import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {

   const ingresintSummary = Object.keys( props.ingredients )
   .map((key, i) =>{
      return (
      <li key={key + i}> 
         <span 
         style={{textTransform: 'capitalize'}}> {key}</span>: {props.ingredients[key]}
         
      </li> ); 
   });

return (
   <Aux>
      <h3>Your Order</h3> 
      <p>A Delicious Burger with the following ingredients:</p> 
      <ul>
         {ingresintSummary}
      </ul> 
      
      <Button
         btntype="Danger"
         clicked={props.pruchaseCancelled}>Cancel
      </Button> 

      <button
         btntype="Success"
         clicked={props.pruchaseContinues}>Continue with order
      </button>
   </Aux>
);
}



export default orderSummary;