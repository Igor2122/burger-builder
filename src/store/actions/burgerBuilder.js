import * as actionTypes from './actionsTypes';
import axios from '../../axios-orders';


export const addIngredient = (name) => {
   return {
      type: actionTypes.ADD_INGREDIENT,
      ingridientName: name
   }
}


export const removeIngredient = (name) => {
   return {
      type: actionTypes.REMOVE_INGREDIENT,
      ingridientName: name
   }
}

export const fetchIngredientsFailed = () => {
   return {
      type: actionTypes.FETCH_INGRIDIENTS_FAILED
   }
}

export const setIngredients = (ingredients) => {
   return {
      type: actionTypes.setIngredients,
      ingredients: ingredients // the name is free value should be the same as passed to the function 
   }
}

export const fetchIngredients = () => {
   return dispatch => {
      axios.get('https://burger-b7a77.firebaseio.com/orders/ingredients.json')
      .then(response => {
          dispatch(setIngredients(response.data));
      })
      .catch(error => {
         dispatch(fetchIngredientsFailed());
      });
   }
}