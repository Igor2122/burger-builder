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
        {controls.map(cntrl => (
            <BuildControl 
            added={() => props.ingredientAdded(cntrl.type)} 
            key={cntrl.label} 
            label={cntrl.label} />
        ))}        
    </div>    
);


export default buildControls;