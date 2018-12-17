import * as actionTypes from '../actions/actionsTypes';

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 4, // base price 
};

// eslint-disable-next-line
const INGRIDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 1.7
}

const reduser = (state = initialState, action) => {    
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:    
            return {
                ...state,// imutably copy 
                ingredients: {
                    ...state.ingredients,// we need to add this as well only doing it in the sate will not do the job
                    [action.ingridientName]: state.ingredients[action.ingridientName] + 1
                    // we get ingridientName as a payload with the action needs to be send with the payload
                },
                totalPrice: state.totalPrice +  INGRIDIENT_PRICES[action.ingridientName]
            };
            case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingridientName]: state.ingredients[action.ingridientName] - 1
                    // we get ingridientName as a payload and with this new syntax we can access the exact ingridient
                },
                totalPrice: state.totalPrice - INGRIDIENT_PRICES[action.ingridientName]
            };
        default: return state;    
    }
};

export default reduser;