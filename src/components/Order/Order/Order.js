import React from 'react';
import classes from './Order.css';


const order = (props) => {
    
    const ingredients =  []
    
    for (let ingrentName in props.igredients) {
        ingredients.push(
            {
                name: ingrentName, 
                ammount: props.igredients[ingrentName]});
    }
    
    const ingredientOutput = ingredients.map(ingr => {
        return <span 
                style={{
                    textTransform: 'capitalize', 
                    display: 'inline-block',
                    margin: '0 8px',
                    padding: '3px',
                    border: '1px solid grey'
                }}
                key={ingr.name}>{ingr.name} ({ingr.ammount})</span>
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
