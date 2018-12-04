import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngridients/BurgerIngredient';

import { withRouter } from 'react-router-dom'// higher order comp by react-router-dom



const burger = (props) => {
    console.log(props);
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igridKey => {
       return [ ...Array( props.ingredients[igridKey] )].map((_, i) => {
          return <BurgerIngredient key={igridKey + i} type={igridKey} />;
       });
    })
    .reduce((arr, el) => { // pass here prev value & current value
        return arr.concat(el); // here we add them both 
    }, []);
    
    
    if(transformedIngredients.length === 0){
       transformedIngredients = <p>Please Start Adding Some Ingredients</p>;
    }
    
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default withRouter(burger);