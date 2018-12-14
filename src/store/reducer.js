import * as actionTypes from './actions';

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 4, // base price 
};

const reduser = (state = initialState, action) => {
    
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:    
            return {
                ...state,// imurably copy 
                ingredients: {
                    ...state.ingredients,// we need to add this as well only doing it in the sate will not do the job
                    [action.ingridientName]: state.ingredients[action.ingridientName] + 1
                    // we get ingridientName as a payload and with this new syntax we can access the exact ingridient
                }
            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,// imurably copy 
                ingredients: {
                    ...state.ingredients,// we need to add this as well only doing it in the sate will not do the job
                    [action.ingridientName]: state.ingredients[action.ingridientName] - 1
                    // we get ingridientName as a payload and with this new syntax we can access the exact ingridient
                }
            };
        default: return state;    
    }
};

export default reduser;