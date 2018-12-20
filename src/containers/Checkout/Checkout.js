import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route, Redirect } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';



class Checkout extends Component {
    



    onCheckoutCancelled = () => {
        this.props.history.goBack();
    }
    
    onCheckoutContinued = () => {
        this.props.history.replace('/checkout/contact-data');
    }
        
    render () {    
        let summary  = <Redirect to="/" />
        if(this.props.ing){ // we are getting this from the state
        const purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null;
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary 
                        ingredients={this.props.ing}
                        onCheckoutCancelled={this.onCheckoutCancelled}
                        onCheckoutContinued={this.onCheckoutContinued}
                    />    
                    <Route path={this.props.match.path + '/contact-data'} 
                    component={ContactData }/>
                </div>
            );
        }
        
    return summary;
    
    }
}

const mapStateToProps = state => {
    return {
        ing: state.burgerBuilder.ingredients,
        purchased: state.order.purchased // added prop in the reducer
    };
};

// const mapDipatchToProps = dispatch => {
//     return {
//         onInitPurchase: () => dispatch(actions.purchaseInit)
//     };
// };

export default connect(mapStateToProps)(Checkout);