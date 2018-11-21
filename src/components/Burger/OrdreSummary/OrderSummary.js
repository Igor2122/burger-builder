import React from 'react';

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
      <p>Continue To Chekout</p> 
   </Aux>
);
}



export default orderSummary;