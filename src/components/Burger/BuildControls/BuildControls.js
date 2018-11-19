import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';


const controls = [
    {label: 'Meat', type: 'meat'},  
    {label: 'Cheese', type: 'cheese'},  
    {label: 'Salad', type: 'salad'},  
    {label: 'Bacon', type: 'bacon'},  
];


const buildControls = (props) => (
    <div className={classes.BuildControl}> 
    <p>Total Price <strong>{props.totalPrice.toFixed(2)}</strong></p>
        {controls.map(cntrl => (
            <BuildControl 
            added={ () => props.ingredientAdded(cntrl.type) } 
            removed={ () => props.ingredientRemoved(cntrl.type) }
            key={cntrl.label} 
            label={cntrl.label} 
            disabled={props.disabled[cntrl.type]}/>
        ))}    
    <button 
        className={classes.OrderButton}
        disabled={!props.purchasable}>ORDER NOW</button>
    </div>    
);


export default buildControls;