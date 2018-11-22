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
      <p><strong>Total Summary: {props.price.toFixed(2)}</strong></p>
      <Button
         btntype="Danger"
         clicked={props.pruchaseCancelled}>Cancel
      </Button> 
      <Button
         btntype="Success"
         clicked={props.pruchaseContinues}>Continue With Purchase
      </Button> 

      
   </Aux>
);
}



export default orderSummary;