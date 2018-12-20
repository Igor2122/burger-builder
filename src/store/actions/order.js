import * as actionTypes from './actionsTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, orderData) =>{
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};

export const purchaseBurgerFailed = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAILED,
        error: error
    };
};

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START 
    }
}

// ASSYNC ACTION CREATOR 

export const purchaseBurger = (orderData) => { // this is the ation we dispatch once click order button
    return dispatch => {
    dispatch(purchaseBurgerStart());
        axios.post('/orders.json', orderData)
        .then(response => {
            console.log(response.data);
            dispatch(purchaseBurgerSuccess(response.data.name, orderData));
        })
        .catch(error => {
               dispatch(purchaseBurgerFailed(error));
            });
    };
};


export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT      
    };
};