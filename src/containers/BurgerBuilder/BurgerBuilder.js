import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrdreSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';



class BurgerBuilder extends Component {

    state = {
        purchasing: false,
    }
    
    componentDidMount () {
        console.log(this.props);
        this.props.onInitIngredients();
    }

    
    updatePurchaseState (ingredients)  {
        const sum = Object.keys( ingredients )
            .map(igkey => {
                return ingredients[igkey];
            })
            .reduce( (sum, el) => {
                return sum + el;
            }, 0);
        return sum > 0;
    }
    
    // addIngredientHandler = (type) => {
        
    //     const oldCount = this.state.ingredients[type];
    //     const updatedCount = oldCount + 1;
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     };
        
    //     updatedIngredients[type] = updatedCount;
    //     const priceAddition = INGRIDIENT_PRICES[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice + priceAddition;
    //     this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    //     this.updatePurchaseState(updatedIngredients);
    // }
    
    
    // removeIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     if(oldCount <= 0){
    //         return
    //     }
    //     const updatedCount = oldCount - 1;
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     };
        
    //     updatedIngredients[type] = updatedCount;
    //     const priceDeduction = INGRIDIENT_PRICES[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice - priceDeduction;
    //     this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    //     this.updatePurchaseState(updatedIngredients);
    // }

    purchaseHandler = () => {
         this.setState({purchasing: true})
    }

    purchaseCancelledHandler = () => {
         this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        this.props.onInitPurchase();
        this.props.history.push('/checkout');
    }
    
    render () {
        const disabledInfo = {
            ...this.props.ing
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
            console.log(disabledInfo[key]);
            
        }
        
        let orderSummary = null;
        let burger = this.props.error ? <p>Ingredients Can't Be Loaded ! </p> : <Spinner />;
        
        if(this.props.ing){
            burger = (
                    <Aux>
                        <Burger ingredients={this.props.ing}/>
                        <BuildControls
                            ingredientAdded={this.props.onIngredientAdded}
                            ingredientRemoved={this.props.onIngredientRemoved}
                            disabled={disabledInfo}
                            purchasable={this.updatePurchaseState(this.props.ing)}
                            totalPrice={this.props.price}
                            ordered={this.purchaseHandler}
                        />
                    </Aux>
                        );  
            orderSummary = <OrderSummary 
                                ingredients={this.props.ing} 
                                price={this.props.price}
                                pruchaseCancelled={this.purchaseCancelledHandler}
                                purchaseProceed={this.purchaseContinueHandler}
                            /> ;
                }
                
            // if(this.state.loading){
            //         orderSummary = <Spinner />
            //     }
                
        return (
            <Aux>  
                <Modal show={this.state.purchasing}
                    modalClosed={this.purchaseCancelledHandler}>
                    {orderSummary}
                </Modal> 

                {burger}
            </Aux>    
        );
    }
}

const mapStateToProps = state => {
    return{
        ing: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error
    };
};

const mapDispatchToProps = disptch => {
    return {
                                    // ingridientName -- is send with an action 
        onIngredientAdded: (ingName) => disptch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => disptch(actions.removeIngredient(ingName)),
        onInitIngredients: () => disptch(actions.fetchIngredients()),
        onInitPurchase: () => disptch(actions.purchaseInit())
        
    };
};

                    // order here is important match state should be first
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));