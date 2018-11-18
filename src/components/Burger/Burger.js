import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngridients/BurgerIngredient';

const burger = (props) => {
    
    
    const transformedIngredients = Object.keys(props.ingredients).map(igridKey => {
       return [...Array(props.ingredients[igridKey])].map((_, i) => {
          return <BurgerIngredient key={igridKey + i} type={igridKey} />;
       });
    });
    
    console.log(transformedIngredients);
    
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;