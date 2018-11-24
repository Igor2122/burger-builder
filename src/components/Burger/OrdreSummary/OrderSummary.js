import React, { Component } from 'react';
import Button from '../../UI/Button/Button';
import Aux from '../../../hoc/Aux';

class OrderSummary extends Component {

   // componentWillUpdate () {
   //    console.log('[OrderSummary] WillUpdate')
   // }


   render (){
      const ingresintSummary = Object.keys( this.props.ingredients )
      .map((key, i) =>{
         return (
         <li key={key + i}> 
            <span 
            style={{textTransform: 'capitalize'}}> {key}</span>: {this.props.ingredients[key]}
            
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
            clicked={this.props.pruchaseCancelled}>Cancel
         </Button> 
   
         <button
            btntype="Success"
            clicked={this.props.pruchaseContinues}>Continue with order
         </button>
      </Aux>
);
}
}


export default OrderSummary;