import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../../store/actions/index';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            adress: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            ZipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zip Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'slow', displayValue: 'Budget'}
                    ],
                },
                value: 'cheapest',
                validation: {}, // to fix the issue of requered below
                valid: true
            },
        },
        formIsValid: false,
    }
    
    // sending data to DB
    orderHandler = (event) => {
        event.preventDefault();
        const formData = {}
        for (let formElementIndentifier in this.state.orderForm){
            formData[formElementIndentifier] = this.state.orderForm[formElementIndentifier].value;
        }
        const order = {
            ingredients: this.props.ing,
            price: this.props.price,
            orderData: formData
        };
        
        this.props.onOrderBurger(order)
    }

    checkValidity(value, rules) {
        
        let isValid = true;

        if(rules.required){
            isValid = value.trim() !== '' && isValid;// to remove all white space 
        }
        if(rules.minLength) {
            isValid = value.length >= rules.minLength  && isValid
        }
        if(rules.maxLength) {
            isValid = value.length <= rules.minLength  && isValid
        }

        return isValid;
    }

    inputChnagedHandler = (event, inputIndentifier) => {
        // console.log(event.target.value);
        const updatedOrderForm = {
            ...this.state.orderForm
        }
        const updatedFormElement = {
            ...updatedOrderForm[inputIndentifier]
        }
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedFormElement.touched = true;
        updatedOrderForm[inputIndentifier] = updatedFormElement;
        // console.log(updatedFormElement);
        
        let formIsValid = true;
        for(let inputIndentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIndentifier].valid && formIsValid;
        }
        
        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
    }
    
    render () {
        
        const formElements = [];
        for(let key in this.state.orderForm) {
            formElements.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }

        let form = (
                    <form onSubmit={this.orderHandler}>
                        {formElements.map(formElement => (
                            <Input 
                            key={formElement.id }
                            elementType={formElement.config.elementType} 
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            invalid={!formElement.config.valid}
                            shouldValidate={formElement.config.validation}
                            touched={formElement.config.touched}
                            changed={(event) => this.inputChnagedHandler(event, formElement.id)}
                            />
                        ))}
                        <Button btntype="Success" disabled={!this.state.formIsValid} >ORDER</Button>
                    </form>
                    );
        if (this.props.loading) {
            form = <Spinner />;
        }
        
        return(
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data </h4>
                {form}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ing: state.ingredients,
        price: state.totalPrice,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onOrderBurger: (orderData) => dispatch(actions.purchaseBurger(orderData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));