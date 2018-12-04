import React from 'react';
import classes from './Order.css';


const order = (props) => {
    
    const ingredients =  []
    
    for (let ingrentName in props.ingredients) {
        ingredients.push(
            {
                name: ingrentName, 
                ammount: props.ingredients[ingrentName]});
    }
    
    const ingredientOutput = ingredients.map(ingr => {
        return <span>{ingr.name} ({ingr.ammount})</span>
    })
    
    console.log(ingredients);
    return(
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: USD {Number.parseFloat(props.price).toFixed(2)}</p>
        </div>
    );
    
    
    
};


export default order;
