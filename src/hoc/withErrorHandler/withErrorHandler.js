import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux';


const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component  {
        
        state = {
            error: null
        }
        
        componentWillMound () {
            this.reqInterseptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
            
            this.responseInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            }); 
        }
        
        componentWillUnMound () {
            // console.lot('[will unmount]', this.reqInterseptor, this.responseInterceptor);
            axios.interceptors.request.eject(this.reqInterseptor);
            axios.interceptors.request.eject(this.responseInterceptor);
        }
        
        errorConfirmedHandler = () => {
            this.setState({error: null});
        }
        
        render () {
            return (
                <Aux>
                    <Modal show={this.state.error}
                            modalClosed={this.errorConfirmedHandler}>
                            {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
        );    
        }
        
    }
}


export default withErrorHandler;