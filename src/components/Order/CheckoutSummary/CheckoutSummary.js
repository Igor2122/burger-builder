import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary';


const checkoutSummary = (props) => {
return (
   <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well!</h1> 
      <div style={{width: '100%', height: '300px', margin: 'auto'}}>
         <Burger ingredients={props.ingredients}/>
      <Button 
         btntype="Danger"
         clicked>Cancel</Button>
      <Button 
         btntype="Success"
         clicked>Continue</Button>
      </div>
   </div>
);
}



export default checkoutSummary;