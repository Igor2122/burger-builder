import * as actionTypes from '../actions/actionsTypes';

const initilaState = {
    orders: [],
    loading: false,
};

const reducer = (state = initilaState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_BURGER_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id: action.orderId
            }
            return {
                ...state,
                loading: false,
                orders: state.orders.concat(newOrder)
            };
        case actionTypes.PURCHASE_BURGER_FAILED: 
            return {
                ...state,
                loading: false,
            };
        default: 
            return state;
    }
};

export default reducer;